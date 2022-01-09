var express = require("express");
var router = express.Router();
var CategoryController = require("../Controllers/CategoryController");
//var authorizationCheck = require('../middleware/authorizationCheck');

router.post("/add", CategoryController.addCategory);
router.get("/view", CategoryController.viewCategory);
router.delete("/view/delete/:categoryId", CategoryController.deleteCategory);
router.get("/view/:categoryId", CategoryController.viewOneCategory);

module.exports = router;
