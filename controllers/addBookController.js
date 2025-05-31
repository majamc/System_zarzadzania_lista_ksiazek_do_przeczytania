const { MENU_LINKS } = require("../constants/navigation");
const { fetchBooks } = require('../models/googleBooks');

const renderSearch = async (req, res) => {
  const { query } = req.query;
  let books = [];

  if (query) {
    books = await fetchBooks(query);
  }

  res.render('add-books.ejs', {
    headTitle: 'Add Books',
    menuLinks: MENU_LINKS,
    path: "/add",
    activeLinkPath: '/add',
    query: query || '',
    books,
  });
};

module.exports = {
  renderSearch,
};
