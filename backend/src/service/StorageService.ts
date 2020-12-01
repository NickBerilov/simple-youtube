import { Video } from '../model/Video';
import config from 'config';
import fs from "fs/promises";
import { logger } from '../logger';
import path from "path";

export interface StorageService {
  findAll(): Promise<Video[]>;
  save(video: Video, file: any): Promise<Video>;
  delete(videoId: string): Promise<void>;
}

export class FileStorageService implements StorageService {
  public static readonly PATH = "storage.filePath";

  private readonly path: string;
  private data: Video[];
  private isDataLoaded = false;

  constructor() {
    this.path = config.get(FileStorageService.PATH);
    this.data = [];
  }

  public async findAll(): Promise<Video[]> {
    return this.isDataLoaded ? this.data : this.load();
  }

  public async save(video: Video, file: any): Promise<Video> {
    return this.findAll()
      .then(() => {
        return this.saveUnsafe(video, file)
      });
  }

  public async delete(videoId: string): Promise<void> {
    if (!this.data) {
      return;
    }
    const video = this.data.find((v) => v.id !== videoId)
    if (!video) {
      throw {statusCode: 404, message: `Video with id='${videoId}' not found`};
    }

    await fs.unlink(this.getPathToVideoFile(videoId, path.extname(video.url)))
    this.data = this.data.filter((v) => v.id !== videoId);
    return this.saveFile();
  }

  private async saveUnsafe(video: Video, file: any): Promise<Video> {
    if (this.data) {
      this.data.push(video);
    }

    await this.saveFile();
    return new Promise((resolve, reject) => { file.mv(this.getPathToVideoFile(video.id, path.extname(file.name)),
      (err: any) => {
        if (err) {
          return reject(err);
        }

        return resolve(video);
      },
    )});
  }

  private getPathToVideoFile(videoId: string, extension: string) {
    return path.join(path.dirname(config.get(FileStorageService.PATH)), videoId + extension);
  }

  private async saveFile(): Promise<void> {
    await this.createDir(path.dirname(this.path));

    return fs.writeFile(this.path, JSON.stringify(this.data));
  }

  private async createDir(p: string): Promise<void> {
    await fs.mkdir(p, { recursive: true });

    logger.debug(`path created: ${p}`)
  }

  private async load(): Promise<Video[]> {
      logger.debug(`loading... '${this.path}'`);

      const database = await fs.readFile(this.path, {encoding: 'utf8'})
      logger.debug(`loading success of '${this.path}'`, database);

      this.data = JSON.parse(database);
      this.isDataLoaded = true;
      return this.data;
  }
}
