const express = require('express');
const bodyParser = require("body-parser");

const { PORT } = require("./config");
const { MENU_LINKS } = require("./constants/navigation");
const { mongoConnect } = require("./database");
const { STATUS_CODE } = require("./constants/statusCode");
const logger = require("./utils/logger");
const homeRoutes = require("./routing/home");
const bookRoutes = require("./routing/addBook");
const listRoutes = require("./routing/myList");

const getFileFromAbsolutePath = require("./utils/getFileFromAbsolutePath");

const app = express(); 

app.set("view engine", "ejs");
app.set("views", "views");

app.use(express.static(getFileFromAbsolutePath("public")));
app.use(bodyParser.urlencoded({ extended: false }));


app.use((request, _response, next) => {
  const { url, method } = request;

  logger.getInfoLog(url, method);
  next();
})

app.use("/", homeRoutes);
app.use(bookRoutes);
app.use(listRoutes);

app.use((request, response) => {
  const { url } = request;

  response.status(STATUS_CODE.NOT_FOUND).render("404", {
    headTitle: "404",
    menuLinks: MENU_LINKS,
    activeLinkPath: "",
  });
  logger.getErrorLog(url);
});

mongoConnect(() => {
  app.listen(PORT);
});