import request from 'supertest';
import app from './app.js';

describe('GET /hello', () => {
  it('should return Hello, World!', async () => {
    const res = await request(app).get('/hello');
    expect(res.statusCode).toBe(200);
    expect(res.text).toBe('Hello, World!');
  });
});

describe('POST /sum', () => {
  it('should return sum of a and b', async () => {
    const res = await request(app)
      .post('/sum')
      .send({ a: 5, b: 3 });
    expect(res.statusCode).toBe(200);
    expect(res.body.result).toBe(8);
  });
});