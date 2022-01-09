const Category = require("../Models/Category");
const Brand = require("../Models/Brand");

var sendJsonResponse = (res, status, content) => {
	res.status(status);
	res.json(content);
};

module.exports.addCategory = (req, res) => {
	Category.find({ name: req.body.name }).exec((err, cat) => {
		if (cat.length >= 1) {
			sendJsonResponse(res, 409, {
				message: "Entered Category already Exists.",
			});
			return;
		} else if (err) {
			sendJsonResponse(res, 404, err);
			return;
		} else {
			const category = new Category({
				name: req.body.name,
			});
			category.save((err2) => {
				if (err2) {
					sendJsonResponse(res, 400, err2);
				} else {
					sendJsonResponse(res, 201, {
						Message: "New Category Added Successfully.",
					});
				}
			});
		}
	});
};

module.exports.viewCategory = (req, res) => {
	Category.find({})
		.sort({ name: 1 })
		.exec((err, cat) => {
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

module.exports.deleteCategory = (req, res) => {
	const id = req.params.categoryId;
	Category.findByIdAndDelete(id).exec((err, cat) => {
		if (err) {
			sendJsonResponse(res, 404, err);
			return;
		}
		sendJsonResponse(res, 200, cat);
	});
};

module.exports.viewOneCategory = (req, res) => {
	const id = req.params.categoryId;
	Brand.find({ category: id }).exec((err, br) => {
		if (br.length === 0) {
			sendJsonResponse(res, 404, {
				message: "No Category Related Brands Found",
			});
			return;
		} else if (err) {
			sendJsonResponse(res, 404, err);
			return;
		}
		sendJsonResponse(res, 200, br);
	});
};
