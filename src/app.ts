import express, { Request, Response } from 'express';

const app = express();

// Define basic routes
app.get('/', (req: Request, res: Response) => {
  res.send('Hello, world!');
});

app.get('/api', (req: Request, res: Response) => {
  res.send('Welcome to the API!');
});

export default app;
