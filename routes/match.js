var express = require('express');
var router = express.Router();
var User = require('../models/user');

router.get('/match', function(req, res, next) {
	console.log('Trying to get users');
	console.log(User.getAllUsers());
})