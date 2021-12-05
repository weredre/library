function findAuthorById(authors, id) {
  let found = authors.find((author)=> author.id === id);
  return found;
}

function findBookById(books, id) {
  let found = books.find((book)=> book.id === id);
  return found;
}

function partitionBooksByBorrowedStatus(books) {}

function getBorrowersForBook(book, accounts) {}

module.exports = {
  findAuthorById,
  findBookById,
  partitionBooksByBorrowedStatus,
  getBorrowersForBook,
};
