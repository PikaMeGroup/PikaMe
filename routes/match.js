var express = require('express');
var router = express.Router();
var User = require('../models/user');


router.get('/userList', function(req,res) {
	console.log('getting all users...')
	User.find({}, function(err, users) {
    var userMap = {};

    users.forEach(function(user) {
      userMap[user._id] = user;
    });

    res.send(userMap); 
    console.log('done getting all users...')

})