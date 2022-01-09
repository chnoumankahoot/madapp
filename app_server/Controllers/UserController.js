const bcrypt = require("bcrypt");
const UserInformation = require("../Models/UserInformation");
const jwt = require("jsonwebtoken");

var sendJsonResponse = (res, status, content) => {
	res.status(status);
	res.json(content);
};

module.exports.signup = (req, res) => {
	UserInformation.find({ phoneNo: req.body.phoneNo }).exec((err, user) => {
		if (user.length >= 1) {
			sendJsonResponse(res, 409, {
				message: "Entered Phone Number already Exists.",
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
					const newUser = new UserInformation({
						name: req.body.name,
						phoneNo: req.body.phoneNo,
						password: hash,
						shopName: req.body.shopName,
						shopAddress: req.body.shopAddress,
					});
					newUser.save((err2) => {
						if (err2) {
							sendJsonResponse(res, 400, err2);
						} else {
							sendJsonResponse(res, 201, {
								Message: "New Account Created Successfully.",
							});
						}
					});
				}
			});
		}
	});
};

module.exports.signin = (req, res) => {
	UserInformation.findOne({ phoneNo: req.body.phoneNo }).exec((err, user) => {
		if (!user) {
			sendJsonResponse(res, 401, {
				message: "Authorization Failed",
			});
			return;
		} else if (err) {
			sendJsonResponse(res, 404, err);
			return;
		} else {
			bcrypt.compare(req.body.password, user.password, (error, result) => {
				if (error) {
					sendJsonResponse(res, 401, {
						message: "Authorization Failed",
					});
					return;
				}
				if (result) {
					const token = jwt.sign(
						{
							name: user.name,
							phoneNo: user.phoneNo,
							userId: user._id,
						},
						"user_signin_token",
						{
							expiresIn: "365d",
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
	const id = req.params.userId;
	UserInformation.findById(id).exec((err, user) => {
		if (!user) {
			sendJsonResponse(res, 404, {
				message: "User Not Found",
			});
			return;
		} else if (err) {
			sendJsonResponse(res, 404, err);
			return;
		}
		sendJsonResponse(res, 200, user);
	});
};

module.exports.delete = (req, res) => {
	const id = req.params.userId;
	UserInformation.findByIdAndDelete(id, (err) => {
		if (err) {
			sendJsonResponse(res, 404, err);
			return;
		}
		sendJsonResponse(res, 200, {
			message: "User Account Deleted",
		});
	});
};
