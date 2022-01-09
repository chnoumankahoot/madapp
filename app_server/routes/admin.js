var express = require("express");
var router = express.Router();
var AdminController = require("../Controllers/AdminController");
var authorizationCheck = require("../middleware/authorizationCheck");
var categoryRouter = require("./category");
var brandRouter = require("./brand");
var productRouter = require("./product");

/* GET users listing. */
router.post("/signup", AdminController.signup);
router.post("/signin", AdminController.signin);
router.get("/account/:adminId", AdminController.accountInformation);
router.delete("/:adminId", AdminController.delete);

router.use("/category", categoryRouter);
router.use("/brand", brandRouter);
router.use("/product", productRouter);

module.exports = router;
