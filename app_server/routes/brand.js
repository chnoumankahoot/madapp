var express = require("express");
var router = express.Router();
var BrandController = require("../Controllers/BrandController");
var authorizationCheck = require("../middleware/authorizationCheck");

router.post("/add", BrandController.addBrand);
router.get("/view", BrandController.viewBrand);
router.get("/get", BrandController.getCategory);
router.get("/get/:name", BrandController.oneCategory);
router.delete("/view/delete/:brandId", BrandController.deleteBrand);
router.get("/view/:brandId", BrandController.viewOneBrand);

module.exports = router;
