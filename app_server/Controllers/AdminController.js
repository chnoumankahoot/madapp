const bcrypt = require("bcrypt");
const AdminInformation = require("../Models/AdminInformation");
const jwt = require("jsonwebtoken");

var sendJsonResponse = (res, status, content) => {
	res.statusCode = status;
	res.setHeader("Content-Type", "application/json");
	res.json(content);
};

module.exports.signup = (req, res) => {
	AdminInformation.find({ email: req.body.email }).exec((err, admin) => {
		if (admin.length >= 1) {
			sendJsonResponse(res, 409, {
				message: "Entered Email already Exists.",
			});
			return;
		} else if (err) {
			sendJsonResponse(res, 404, err);
			return;
		} else {
			bcrypt.hash(req.body.password, 10, (error, hash) => {
				if (error) {
					sendJsonResponse(res, 500, error);
					return;
				} else {
					const newAdmin = new AdminInformation({
						name: req.body.name,
						email: req.body.email,
						password: hash,
					});
					newAdmin.save((err2) => {
						if (err2) {
							sendJsonResponse(res, 400, err2);
							return;
						} else {
							sendJsonResponse(res, 201, {
								message: "Admin Account Created Successfully.",
							});
							return;
						}
					});
				}
			});
		}
	});
};

module.exports.signin = (req, res) => {
	AdminInformation.findOne({ email: req.body.email }).exec((err, admin) => {
		if (!admin) {
			sendJsonResponse(res, 401, {
				message: "Authorization Failed",
			});
			return;
		} else if (err) {
			sendJsonResponse(res, 404, err);
			return;
		} else {
			bcrypt.compare(req.body.password, admin.password, (error, result) => {
				if (error) {
					sendJsonResponse(res, 401, {
						message: "Authorization Failed",
					});
					return;
				}
				if (result) {
					const token = jwt.sign(
						{
							name: admin.name,
							email: admin.email,
							adminId: admin._id,
						},
						"user_signin_token",
						{
							expiresIn: "1d",
						}
					);
					sendJsonResponse(res, 200, {
						message: "Authorization Successful",
						token: token,
					});
					return;
				}
				sendJsonResponse(res, 401, {
					message: "Authorization Failed",
				});
			});
		}
	});
};

module.exports.accountInformation = (req, res) => {
	const id = req.params.adminId;
	AdminInformation.findById(id).exec((err, admin) => {
		if (!admin) {
			sendJsonResponse(res, 404, {
				message: "User Not Found",
			});
			return;
		} else if (err) {
			sendJsonResponse(res, 404, err);
			return;
		}
		sendJsonResponse(res, 200, admin);
	});
};

module.exports.delete = (req, res) => {
	const id = req.params.adminId;
	AdminInformation.findByIdAndDelete(id, (err) => {
		if (err) {
			sendJsonResponse(res, 404, err);
			return;
		}
		sendJsonResponse(res, 200, {
			message: "Admin Account Deleted",
		});
	});
};
