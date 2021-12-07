function findAuthorById(authors, id) {
    let found = authors.find((author)=> author.id === id);
  return found;
}

function findBookById(books, id) {
  let found = books.find((book)=> book.id === id);
  return found;

}

function partitionBooksByBorrowedStatus(books) {
  const borrowedBooks = books.filter((book) => book.borrows[0].returned === false);
  const returnedBooks = books.filter((book) => book.borrows[0].returned === true);
  return [borrowedBooks, returnedBooks];

}

function getBorrowersForBook(book, accounts) {
   const borrowArr = [];
  const borrowLog = book.borrows;
  const accountIds = accounts.reduce((accu, account) => {
    accu[account.id] = account;
    return accu;
  }, {});
  for (let index in borrowLog){
    for (let jndex in accountIds) {
      if (accountIds[jndex].id === borrowLog[index].id) {
        const { returned } = borrowLog[index];
        accountIds[jndex]["returned"] = returned;
        borrowArr.push(accountIds[jndex]);
      }
    }
  }
  return borrowArr.slice(0, 10);
}

module.exports = {
  findAuthorById,
  findBookById,
  partitionBooksByBorrowedStatus,
  getBorrowersForBook,
};
