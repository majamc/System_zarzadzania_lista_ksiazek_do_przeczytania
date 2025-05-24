const { MENU_LINKS } = require("../constants/navigation");

exports.getAddBooksView = (request, response) => {
  response.render("add-books.ejs", {
    headTitle: "Add Books",
    path: "/add",
    activeLinkPath: "/add",
    menuLinks: MENU_LINKS,
  });
};