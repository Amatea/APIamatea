var express = require('express');

var passport        = require('passport');
var LocalStrategy   = require('passport-local').Strategy;

var router = express.Router();

passport.use(new LocalStrategy(
  function(username, password, done) {
    if (username === "amatea" && password === "serynaturaleza") // nombre
      return done(null, {name: "admin"});

    return done(null, false, { message: 'Usuario Incorrecto' });
  }
));

passport.serializeUser(function(user, done) {
    done(null, user);
});

passport.deserializeUser(function(user, done) {
    done(null, user);
});

var auth        = function(req, res, next){
                    if (!req.isAuthenticated()) 
                        res.send(401);
                    else
                    next();
                    };

router.use(function(req,res,next){
    console.log('something is happening');
    next();
});

router.get('/',function(req,res){
  res.send('#/admin/inicio.html', { title: 'Dendros' });

});
router.get('/users', auth, function(req, res){
  res.send([{name: "user1"}, {name: "user2"}]);
});

router.get('/loggedin', function(req, res) {
  res.send(req.isAuthenticated() ? req.user : '0');
});

router.post('/login', passport.authenticate('local'), function(req, res) {
  res.send(req.user);
});

router.post('/logout', function(req, res){
  req.logOut();
  res.send(200);
});

module.exports = router;