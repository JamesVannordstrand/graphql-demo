const authors = [
  { id: 1, name: "J.K. Rowling" },
  { id: 2, name: "J.R.R. Tolkien" }
];

const books = [
  { title: "Harry Potter and the Sorcerer's Stone", authorId: 1 },
  { title: "The Hobbit", authorId: 2 },
  { title: "The Lord of the Rings", authorId: 2 }
];

const resolvers = {
  Query: {
    hello: () => "Hello, world!",
    books: () => books,
    authors: () => authors
  },
  Book: {
    author: (book) => authors.find(author => author.id === book.authorId)
  },
  Author: {
    books: (author) => books.filter(book => book.authorId === author.id)
  }
};

module.exports = resolvers;
