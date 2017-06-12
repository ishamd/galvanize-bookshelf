const bookList = require('../books');

exports.seed = function(knex) {
  return knex('books')
    .del()
    .then(() => knex('books').insert(bookList))
    .then(() => knex.raw("SELECT setval('books_id_seq', (SELECT MAX(id) FROM books))"));
};
