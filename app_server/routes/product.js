var express = require("express");
var router = express.Router();
var ProductController = require("../Controllers/ProductController");
var authorizationCheck = require("../middleware/authorizationCheck");
var multer = require("multer");
var storage = multer.diskStorage({
	destination: (req, file, cb) => {
		cb(null, "./uploads/");
	},
	filename: (req, file, cb) => {
		cb(null, file.originalname);
	},
});
var fileFilter = (req, file, cb) => {
	if (file.mimetype === "image/jpeg" || file.mimetype === "image/png") {
		cb(null, true);
	} else {
		cb(null, false);
	}
};
var upload = multer({
	storage: storage,
	limits: {
		fileSize: 1024 * 1024 * 5,
	},
	fileFilter: fileFilter,
});
router.post("/add", upload.single("image"), ProductController.addProduct);
router.get("/view", ProductController.viewProduct);
router.delete("/view/:productId", ProductController.deleteProduct);
router.get("/get/:productId", ProductController.oneProduct);
router.put("/update/:productId", ProductController.updateProduct);

module.exports = router;
