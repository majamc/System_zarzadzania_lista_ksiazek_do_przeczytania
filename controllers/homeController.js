const { MENU_LINKS } = require("../constants/navigation");
const Book = require("../models/Book");


exports.getHomeView = async (request, response) => {
  try {
    const newestBook = await Book.getLastAdded();
    
    response.render("home.ejs", {
      headTitle: "Home",
      path: "/",
      activeLinkPath: "/",
      menuLinks: MENU_LINKS,
      newestBook
    });
  } catch (err) {
    console.error("Error in getHomeView:", err);
    response.status(500).send("Internal Server Error");
  }
};
