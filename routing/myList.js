const express = require("express");
const myListController = require("../controllers/myListController");
const router = express.Router();

router.get("/list", myListController.getListPage);
router.post("/list", myListController.addBookToList);
router.post("/list/delete/:id",myListController.deleteBook);
router.post('/list/mark-as-read/:bookId', myListController.markAsRead);
router.post('/list/mark-as-unread/:bookId', myListController.markAsUnread);

module.exports = router;