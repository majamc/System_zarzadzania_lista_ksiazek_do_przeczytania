const express = require("express");
const myListController = require("../controllers/myListController");
const router = express.Router();

router.get("/list", myListController.getListPage);
router.post("/list", myListController.addBookToList);

module.exports = router;