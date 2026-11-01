const express = require('express');
const Routes = express.Router();
const { getallbooks, createbook, createbooks, updatebook, deletebook } = require('../controllers/bookController');

Routes.get('/books', getallbooks);
Routes.post('/books', createbook);
Routes.post('/bulk', createbooks);
Routes.put('/books/:id', updatebook);
Routes.delete('/books/:id', deletebook);

module.exports = Routes;
