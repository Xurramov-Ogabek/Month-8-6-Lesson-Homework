import express from 'express';

const app = express();
app.use(express.json());

app.get('/hello', (req, res) => {
  res.send('Hello, World!');
});

app.post('/sum', (req, res) => {
  const { a, b } = req.body;
  res.json({ result: a + b });
});

if (process.env.NODE_ENV !== 'test') {
  const PORT = 3000;
  app.listen(PORT, () => console.log(`Server running on port ${PORT}`));
}

export default app;