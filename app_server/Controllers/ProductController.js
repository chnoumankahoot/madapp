const Product = require("../Models/Product");

var sendJsonResponse = (res, status, content) => {
	res.status(status);
	res.json(content);
};

module.exports.addProduct = (req, res) => {
	Product.find({ name: req.body.name }).exec((err, pro) => {
		if (pro.length >= 1) {
			sendJsonResponse(res, 409, {
				message: "Entered Product already Exists.",
			});
			return;
		} else if (err) {
			sendJsonResponse(res, 404, err);
			return;
		} else {
			const product = new Product({
				name: req.body.name,
				eachPrice: req.body.eachPrice,
				packing: req.body.packing,
				price: req.body.price,
				brand: req.body.brand,
				category: req.body.category,
				image: req.body.image,
			});
			product.save((err2) => {
				if (err2) {
					sendJsonResponse(res, 400, err2);
				} else {
					sendJsonResponse(res, 201, {
						Message: "New Product Added Successfully.",
					});
				}
			});
		}
	});
};

module.exports.viewProduct = (req, res) => {
	Product.find({})
		.sort({ name: 1 })
		.exec((err, pro) => {
			if (pro.length < 1) {
				sendJsonResponse(res, 404, {
					message: "No Product Found",
				});
				return;
			} else if (err) {
				sendJsonResponse(res, 404, err);
				return;
			}
			sendJsonResponse(res, 200, pro);
		});
};

module.exports.deleteProduct = (req, res) => {
	const id = req.params.productId;
	Product.findByIdAndDelete(id, (err) => {
		if (err) {
			sendJsonResponse(res, 404, err);
			return;
		}
		sendJsonResponse(res, 200, {
			message: "Product Deleted Successfully",
		});
	});
};

module.exports.oneProduct = (req, res) => {
	const id = req.params.productId;
	Product.findById(id).exec((err, pro) => {
		if (pro.length < 1) {
			sendJsonResponse(res, 404, {
				message: "No Product Found",
			});
			return;
		} else if (err) {
			sendJsonResponse(res, 404, err);
			return;
		}
		sendJsonResponse(res, 200, pro);
		return;
	});
};

module.exports.updateProduct = (req, res) => {
	const id = req.params.productId;
	Product.findByIdAndUpdate(id, req.body, (err, result) => {
		if (err) {
			sendJsonResponse(res, 404, err);
			return;
		}
		sendJsonResponse(res, 201, result);
	});
};
