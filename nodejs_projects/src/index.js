const express = require('express');
const { uuid } = require('uuidv4');

const log = require('./middleware/log');
const validateId = require('./middleware/validateId');

const app = express();

app.use(express.json());

app.use(log);
app.use('/books/:id', validateId);

const books = [];

app.get('/', (request, response) => {
  response.json({ message: 'Hello GoStack 🖐️' });
});

app.get('/books', (request, response) => {
  const { title } = request.query;

  const results = title 
    ? books.filter(book => book.title.includes(title))
    : books;

  return response.json(results);
});

app.post('/books', (request, response) => {
  const { title, owner } = request.body;

  const book = { id: uuid(), title, owner };

  books.push(book);

  return response.json(book);
});

app.put('/books/:id', (request, response) => {  
  const { id } = request.params;
  
  const bookIndex = books.findIndex(project => project.id === id);

  if (bookIndex < 0) {
    return response.status(400).json({ error: 'Book not found.'});
  }

  const { title, owner } = request.body;

  const book = {
    id,
    title,
    owner,
  };

  books[bookIndex] = book;

  return response.json(book);
});

app.delete('/books/:id', (request, response) => {
  const { id } = request.params;

  const bookIndex = books.findIndex(project => project.id === id);

  if (bookIndex < 0) {
    return response.status(400).json({ error: 'Book not found.'});
  }

  books.splice(bookIndex, 1);

  return response.status(204).send();
});

app.listen(3333, () => {
  console.log("🚀️ Back-end started! 🤑️😎️");
});