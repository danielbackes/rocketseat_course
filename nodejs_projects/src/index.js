const express = require('express');

const app = express();

app.get('/', (request, response) => {
  response.json({ message: 'Hello GoStack 🖐️' });
});

app.get('/projects', (request, response) => {
  response.json([
    'GoBarber',
    'Tindev',
  ]);
});

app.post('/projects', (request, response) => {
  return response.json([
    'GoBarber',
    'Tindev',
    'Projects',
  ]);
});

app.put('/projects/:id', (request, response) => {  
  return response.json([
    'GoBarber Pro',
    'Tindev',
    'Projects',
  ]);
});

app.delete('/projects/:id', (request, response) => {
  return response.json([
    'GoBarber Pro',
    'Tindev',
  ]);
});

app.listen(3333, () => {
  console.log("🚀️ Back-end started! 🤑️😎️");
});