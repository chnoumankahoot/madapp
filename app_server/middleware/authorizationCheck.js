const jwt = require('jsonwebtoken');

var sendJsonResponse = (res, status, content) => {
    res.status(status);
    res.json(content);
}

module.exports = (req, res, next) => {
    try {
        const token = req.headers.authorization.split(" ")[1];
        const tokenData = jwt.verify(token, "user_signin_token");
        req.userData = tokenData;
        next();
    } catch (err) {
        sendJsonResponse(res, 401, {
            "message": "Authorization Failed"
        });
    }
};