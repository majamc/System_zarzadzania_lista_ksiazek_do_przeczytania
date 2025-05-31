const { MENU_LINKS } = require("../constants/navigation");
const savedBooks = [];

const addBookToList = (req, res) => {
  const { title, authors, thumbnail, categories } = req.body;
 savedBooks.push({ title, authors, thumbnail, categories });
};

const getListPage = (req, res) => {
  res.render("my-list", {
    headTitle: "My List",
    menuLinks: MENU_LINKS,
    activeLinkPath: "/list",
    books: savedBooks,
  });
};

module.exports = {
  getListPage,
  addBookToList
};