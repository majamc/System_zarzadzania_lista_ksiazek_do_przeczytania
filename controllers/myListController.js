const { MENU_LINKS } = require("../constants/navigation");
const Book = require("../models/Book");


const addBookToList = async (req, res) => {
  const { title, authors, thumbnail, categories } = req.body;
  try {
    const book = new Book(title, authors, thumbnail, categories);
    await book.save();
  } catch (err) {
    res.status(500).send("Failed to save the book.");
  }
};

const deleteBook = async (req, res) => {
  const bookId = req.params.id;
  try {
    await Book.deleteById(bookId);
    res.redirect("/list");
  } catch (err) {
    res.status(500).send("Failed to delete the book.");
  }
};

const getListPage = async (req, res) => {
  try {
     const { author, category, status } = req.query;
     const books = await Book.filter({ author, category, status });

    res.render("my-list", {
      headTitle: "My List",
      menuLinks: MENU_LINKS,
      activeLinkPath: "/list",
      books: books.slice().reverse(),
      author,
      category,
      status,
    });
  } catch (err) {
    res.status(500).send("Failed to fetch books.");
  }
};

const markAsRead = async (req, res) => {
  const bookId = req.params.bookId;

  try {
    await Book.updateStatus(bookId, 'read');
    res.redirect('/list');
  } catch (error) {
    console.error('Error marking book as read:', error);
    res.redirect('/list');
  }
};

const markAsUnread = async (req, res) => {
  const bookId = req.params.bookId;

  try {
    await Book.updateStatus(bookId, 'unread');
    res.redirect('/list');
  } catch (error) {
    console.error('Error marking book as unread:', error);
    res.redirect('/list');
  }
};

module.exports = {
  getListPage,
  addBookToList,
  deleteBook,
  markAsRead,
  markAsUnread
};