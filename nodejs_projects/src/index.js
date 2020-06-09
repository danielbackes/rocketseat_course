const express = require('express');

const app = express();

app.use(express.json());

app.get('/', (request, response) => {
  response.json({ message: 'Hello GoStack 🖐️' });
});

app.get('/books', (request, response) => {
  const { title, owner } = request.query;

  console.log('Query params');
  console.log(title);
  console.log(owner);

  return response.json([
    'Man, Economy and State',
    'The Law',
  ]);
});

app.post('/books', (request, response) => {
  const { title, owner } = request.body;

  console.log('Request Body');
  console.log(title);
  console.log(owner);

  return response.json([
    'Man, Economy and State',
    'The Law',
    title,
  ]);
});

app.put('/books/:id', (request, response) => {  
  const { id } = request.params;

  console.log('Route params');
  console.log(id);

  const { title, owner } = request.body;

  console.log('Request Body');
  console.log(title);
  console.log(owner);

  return response.json([
    'Man, Economy and State',
    title,
  ]);
});

app.delete('/books/:id', (request, response) => {
  const { id } = request.params;

  console.log('Route params');
  console.log(id);

  return response.json([
    'Man, Economy and State',
  ]);
});

app.listen(3333, () => {
  console.log("🚀️ Back-end started! 🤑️😎️");
});