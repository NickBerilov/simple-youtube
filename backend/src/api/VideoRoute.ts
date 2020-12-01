import express, { Request } from 'express';
import { Response } from 'express-serve-static-core';
import { v4 as uuid } from 'uuid';

import { VideoService } from '../service/VideoService';
import { FileStorageService } from '../service/StorageService';

const router = express.Router();

const videoService = new VideoService(new FileStorageService());

router.get('/video', async (req: Request, res: Response) => {
  res.json(await videoService.findAll());
});

router.post('/upload', async (req: any, res: Response) => {
  if (!req.files || !req.files.file) {
    throw new Error('no file provided');
  }

  let id = uuid();
  res.json(await videoService.save({
    id: id,
    url: `${id}.mp4`,
    title: req.body.videoTitle,
    description: req.body.videoDesc,
  }, req.files.file));
});

router.delete('/delete/:id', async (req: any, res: Response) => {
  res.json(await videoService.delete(req.params.id));
});

export { router };
