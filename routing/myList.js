const express = require("express");
const myListController = require("../controllers/myListController");
const router = express.Router();

router.get("/list", myListController.getMyListView);

module.exports = router;