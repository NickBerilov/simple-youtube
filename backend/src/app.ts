import express from 'express';
import http from 'http';
import cors from 'cors';
import config from 'config';
import path from 'path';
import fileUpload from 'express-fileupload';
import { router } from './api/VideoRoute';
import { logger } from './logger';
import { NextFunction, Request, Response } from 'express-serve-static-core';

require('dotenv').config();

const app = express();
const server = http.createServer(app);

app.use(express.json());
app.use(cors());
app.use(fileUpload());

app.use(function (req, res, next) {
  logger.debug("HTTP:" + req.originalUrl);
  next();
});

app.use(router);

const port = process.env.PORT || 3001;

app.use(express.static(path.dirname(config.get('storage.filePath'))));

app.use((err: any, req: Request, res: Response, next: NextFunction) => {
  res.status(err.statusCode || 500).json({
    status: err.status || 'error',
    message: err.message
  });
});

server.listen(port, () => {
  logger.info(`Simple Youtube app listening at http://localhost:${port}`)
});

export { app };
