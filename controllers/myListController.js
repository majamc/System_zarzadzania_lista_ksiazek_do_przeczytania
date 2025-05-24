const { MENU_LINKS } = require("../constants/navigation");

exports.getMyListView = (request, response) => {
  response.render("my-list.ejs", {
    headTitle: "My List",
    path: "/list",
    activeLinkPath: "/list",
    menuLinks: MENU_LINKS,
  });
};