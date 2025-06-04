const { MENU_LINKS } = require("../constants/navigation");
const Book = require("../models/Book");


const addBookToList = async (req, res) => {
  const { title, authors, thumbnail, categories } = req.body;
  try {
    const book = new Book(title, authors, thumbnail, categories);
    await book.save();
    //res.redirect("/list");
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
    const books = await Book.fetchAll();
    res.render("my-list", {
      headTitle: "My List",
      menuLinks: MENU_LINKS,
      activeLinkPath: "/list",
      books: books.slice().reverse(),
    });
  } catch (err) {
    res.status(500).send("Failed to fetch books.");
  }
};

module.exports = {
  getListPage,
  addBookToList,
  deleteBook
};