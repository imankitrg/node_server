const express = require('express');
const Routes = express.Router();
const { getallbooks, createbook, updatebook, deletebook } = require('../controllers/bookController');

Routes.get('/books', getallbooks);
Routes.post('/books', createbook);
Routes.put('/books/:id', updatebook);
Routes.delete('/books/:id', deletebook);

module.exports = Routes;
