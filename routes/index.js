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
      console.log('at poke for ', req.user.name, 'saving', req.body.pokemonname);
      User.getUserByUsername(req.user.name,function(err,user){
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
            console.log('successfully added', req.body.pokemonname, 'to ', req.user.name);
           	// req.flash('success', 'pokemon saved');
            // res.location('/');
            // res.redirect('/match');
            res.send({
            	redirect:'/match'
            })
        });
    });
  });


module.exports = router;
