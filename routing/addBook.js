const express = require("express");
const { renderSearch } = require("../controllers/addBookController");
const router = express.Router();

router.get("/add", renderSearch);

module.exports = router;