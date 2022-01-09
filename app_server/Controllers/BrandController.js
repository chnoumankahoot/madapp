const Brand = require("../Models/Brand");
const Category = require("../Models/Category");
const Product = require("../Models/Product");

var sendJsonResponse = (res, status, content) => {
	res.status(status);
	res.json(content);
};

module.exports.getCategory = (req, res) => {
	Category.find({}).exec((err, cat) => {
		if (cat.length < 1) {
			sendJsonResponse(res, 404, {
				message: "No Category Found",
			});
			return;
		} else if (err) {
			sendJsonResponse(res, 404, err);
			return;
		}
		sendJsonResponse(res, 200, cat);
		return;
	});
};

module.exports.oneCategory = (req, res) => {
	const id = req.params.name;
	console.lopg(id);
	Category.findOne({ name: id }).exec((err, cat) => {
		if (cat.length < 1) {
			sendJsonResponse(res, 404, {
				message: "No Category Found",
			});
			return;
		} else if (err) {
			sendJsonResponse(res, 404, err);
			return;
		}
		sendJsonResponse(res, 200, cat);
		return;
	});
};

module.exports.addBrand = (req, res) => {
	Brand.find({ name: req.body.name }).exec((err, br) => {
		if (br.length >= 1) {
			sendJsonResponse(res, 409, {
				message: "Entered Brand already Exists.",
			});
			return;
		} else if (err) {
			sendJsonResponse(res, 404, err);
			return;
		} else {
			const brand = new Brand(req.body);
			brand.save((err2) => {
				if (err2) {
					sendJsonResponse(res, 400, err2);
				} else {
					sendJsonResponse(res, 201, {
						Message: "New Brand Added Successfully.",
					});
				}
			});
		}
	});
};

module.exports.viewBrand = (req, res) => {
	Brand.find({})
		.sort({ name: 1 })
		.exec((err, br) => {
			if (br.length < 1) {
				sendJsonResponse(res, 404, {
					message: "No Brand Found",
				});
				return;
			} else if (err) {
				sendJsonResponse(res, 404, err);
				return;
			}
			sendJsonResponse(res, 200, br);
		});
};

module.exports.deleteBrand = (req, res) => {
	const id = req.params.brandId;
	Brand.findByIdAndDelete(id, (err) => {
		if (err) {
			sendJsonResponse(res, 404, err);
			return;
		}
		sendJsonResponse(res, 200, {
			message: "Brand Deleted Successfully",
		});
	});
};

module.exports.viewOneBrand = (req, res) => {
	const id = req.params.brandId;
	Product.find({ brand: id }).exec((err, pro) => {
		if (pro.length === 0) {
			sendJsonResponse(res, 404, {
				message: "No Brand Related Products Found",
			});
			return;
		} else if (err) {
			sendJsonResponse(res, 404, err);
			return;
		}
		sendJsonResponse(res, 200, pro);
	});
};
