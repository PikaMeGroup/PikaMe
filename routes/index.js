var express = require('express');
var router = express.Router();
var User = require('../models/user');


/* GET home page. */
router.get('/', ensureAuthenticated, function(req, res, next) {
  res.render('index', { title: 'Members' });
});

router.get('/match', ensureAuthenticated, function(req, res) {
  console.log('trying to  show match');
  res.render('match.hbs');
  console.log('match shouldve loaded');
});

router.get('/testchat', function (req, res) {
    console.log('Trying to access testchat')
    res.render('chat.hbs');
    console.log('testchat accessed')
});

function ensureAuthenticated(req,res,next){
  if(req.isAuthenticated()){
		var uname;
		uname = req.user.name;
		module.exports.uname = uname;
		return next();
	}
	res.redirect('/users/login');
}


router.post('/save', ensureAuthenticated, function(req, res) {
      console.log('at poke for ', req.user.username, 'saving', req.body.pokemonname);
      User.getUserByUsername(req.user.username,function(err,user){
        if(err){
            console.log("some err", err);
            throw err;
        }
        if(!user){
            console.log('no user found');
            return;;
        }
        User.appendPoke(user, req.body.pokemonname, function(err){
            if(err) {
                console.log('some other err', err);
                return;
            }    
            console.log('successfully added', req.body.pokemonname, 'to ', req.user.username);
           	// req.flash('success', 'pokemon saved');
            // res.location('/');
            // res.redirect('/match');
            res.send({
            	redirect:'/match'
            })
        });
    });
  });


router.get('/userList', function(req,res) {
  console.log('getting all users...')
  User.find({}, function(err, users) {
    var userMap = {};

    users.forEach(function(user) {
      userMap[user._id] = user;
    });

    usernamelist = []
    pokelist = []

   for (var key in userMap){
      username = userMap[key].username;
      pokesel = userMap[key].pokeselect;
      usernamelist.push(username);
      pokelist.push(pokesel); 
    };
    var result = {};
    usernamelist.forEach((user, i) => result[user] = pokelist[i]);
    console.log(result);

    //getting current user

    res.send(result); 
    console.log('done getting all users...')

});
});


router.get('/currentUser', function(req,res) {
  console.log('getting all users...')
 
    User.gettingUser(req.user.username),function(err,user){
        if(err){
            console.log("some err", err);
            throw err;
        }
        if(!user){
            console.log('no user found');
            return;;
        }
        currUser = req.user.username;
        console.log('logging current user in index', currUser);
    };
    res.send(currUser); 
    console.log('done getting all users...')

});

module.exports = router;
