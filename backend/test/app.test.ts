import { app } from '../src/app';
const request = require('supertest');

describe("VideoRouter", () => {
  it('GET /video', async () => {
    const res = await request(app).get('/video');

    expect(res.status).toBe(200);
    expect(res.body.length).toBeGreaterThanOrEqual(1);
  })

  describe('POST /upload', () => {
    it('return 400 if no data file provided', async () => {

    })

    it('return video object in case of success', () => {
      const filePath = './test.mp4';
      return request(app)
        .post('/upload')
        .field('videoTitle', 'movie title')
        .field('videoDesc', 'movie description')
        .attach('file', filePath)
        .then((res: any) => {
          const { title, description } = res.body;
          expect(title).toBe('movie title');
          expect(description).toBe('movie description');
        })
        .catch((err: any) => {
          console.error(err);
        });
    });
  });


})

