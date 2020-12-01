
import { Video } from '../model/Video'
import { StorageService } from './StorageService';

/**
 * For now it just forwarding to storage but logic can be customized
 */
export class VideoService {

  constructor(
    private readonly storage: StorageService
  ) {
  }

  async findAll(): Promise<Video[]> {
    return this.storage.findAll();
  }

  async save(video: Video, file: any): Promise<Video> {
    return this.storage.save(video, file);
  }

  async delete(videoId: string): Promise<void> {
    return this.storage.delete(videoId);
  }
}
