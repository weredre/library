function findAccountById(accounts, id) {
  let found = accounts.find((account)=> account.id === id);
  return found;
}

function sortAccountsByLastName(accounts) {
  accounts.sort((accountA, accountB) => (accountA.name.last > accountB.name.last ? 1 : -1));
  return accounts
}

function getTotalNumberOfBorrows(account, books) {
  const accountId = account.id;
  const borrowedBook = [];
  const findBooks = books.forEach((book) => {
    const borrowedHistory = book.borrows;
    const filteredBooks = borrowedHistory.filter((borrowId) => {
      if (borrowId.id == accountId) {
        borrowedBook.push(book);
      }
    });
  });
  let count = borrowedBook.length;
  return count;
}

function getBooksPossessedByAccount(account, books, authors) {
 const possessedBooks = [];
 const accountId = account.id;
 for (let index in books) {
   const book = books[index];
   const { id, title, authorId, genre, borrows } = book;
   for (let jndex in borrows) {
     if (borrows[jndex].id === accountId && borrows[jndex].returned === false) {
       for (let kndex in authors) {
         const author = authors[kndex];
         if (author.id === book.authorId) {
           let tempObj = { id, title, genre, authorId, author, borrows };
           possessedBooks.push(tempObj);
         }
       }
     }
   }
 }
 return possessedBooks;
}

module.exports = {
  findAccountById,
  sortAccountsByLastName,
  getTotalNumberOfBorrows,
  getBooksPossessedByAccount,
};
