import request from 'supertest';
import app from '../src/app'; // Adjust the path to your app.ts file

describe('GET /', () => {
  it('should return a welcome message', async () => {
    const response = await request(app).get('/');
    expect(response.status).toBe(200);
    expect(response.body.message).toBe('Welcome to the Express API');
  });
});

describe('GET /example', () => {
  it('should return a sample response', async () => {
    const response = await request(app).get('/example');
    expect(response.status).toBe(200);
    expect(response.body.message).toBe('This is an example route');
  });
});
