var Proyecto = require('../dbconection/userapp');
var express = require('express');
var FacebookStrategy = require('passport-facebook').Strategy;
var passport = require('passport');



var app = express.Router();



     passport.serializeUser(function(user, done) {
        done(null, user);
    });

     passport.deserializeUser(function(obj, done) {
        done(null, obj);
    });
     
     passport.use(new FacebookStrategy({
        clientID: '1087418867983699',
        clientSecret: '024fb66d181bce7f45c938706a359b67',
        callbackURL: '/auth/facebook/callback',
        profileFields: ['id', 'displayname', 'provider', 'photos']
    }, function(accessToken, refreshToken, profile, done) {
        User.findOne({provider_id: profile.id}, function(err, user) {
            if(err) throw(err);
            if(!err && user!= null) return done(null, user);

            var user = new User({
                provider_id: profile.id,
                provider: profile.provider,
                name: profile.displayName,
                photo: profile.photos[0].value
            });
            user.save(function(err) {
                if(err) throw err;
                done(null, user);
            });
        });
    }));




module.exports = app;