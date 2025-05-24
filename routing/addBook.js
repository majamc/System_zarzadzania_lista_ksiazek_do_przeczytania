const express = require("express");
const addBookController = require("../controllers/addBookController");
const router = express.Router();

router.get("/add", addBookController.getAddBooksView);

module.exports = router;