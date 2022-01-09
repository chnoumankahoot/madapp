var express = require('express');
var router = express.Router();
var UserProductController = require('../Controllers/UserProductController');
var authorizationCheck = require('../middleware/authorizationCheck');

router.post('/search', authorizationCheck, UserProductController.searchProduct);
// router.get('/view', authorizationCheck, UserProductController.viewProduct);
// router.delete('/view/:productId', authorizationCheck, UserProductController.deleteProduct);

module.exports = router;
