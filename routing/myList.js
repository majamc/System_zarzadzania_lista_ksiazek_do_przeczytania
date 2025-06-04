const express = require("express");
const myListController = require("../controllers/myListController");
const router = express.Router();

router.get("/list", myListController.getListPage);
router.post("/list", myListController.addBookToList);
router.post("/list/delete/:id",myListController.deleteBook);

module.exports = router;