var express = require('express');
var router = express.Router();
var UserController = require('../Controllers/UserController');
var authorizationCheck = require('../middleware/authorizationCheck');
var userProductRouter = require('./userProduct');

/* GET users listing. */
router.post('/signup', UserController.signup);
router.post('/signin', UserController.signin);
router.get('/account/:userId', authorizationCheck, UserController.accountInformation);
router.delete('/:userId', authorizationCheck, UserController.delete);

router.use('/products', userProductRouter);

module.exports = router;
