var express = require('express');
var path = require('path');
var bodyParser = require('body-parser');
var morgan    		= require('morgan');
var cookieParser 	= require('cookie-parser');
var session   		= require('express-session');
var methodOverride 	= require('method-override');
var passport 		= require('passport');
var LocalStrategy 	= require('passport-local').Strategy;
var FacebookStrategy = require('passport-facebook').Strategy;
var favicon 		= require('serve-favicon');
var mongoose		= require('mongoose');
var config          = require('./config');

var contactoService=require('./services/contactoroute');
var noticiaService=require('./services/noticiaroute');
var proyectoService=require('./services/proyectoroute');
var bosquesService=require('./services/bosqueroute');
var donacionService=require('./services/donacionroute');
var passportServices=require('./services/route');
var passportFacebook=require('./services/passport');

var app = express();

//connect to our database
mongoose.connect(config.db.conn);

app.use(morgan('dev'));

app.use(cookieParser());
app.use(bodyParser.json() );   
app.use(bodyParser.urlencoded({ 
	extended: true
}));
app.use(methodOverride());                  // simulate DELETE and PUT
app.use(session({ 
	resave: true,
    saveUninitialized: true,
    secret: 'Dendros' }));
app.use(passport.initialize()); // Add passport initialization
app.use(passport.session());    // Add passport initialization
app.use(express.static(path.join(__dirname, 'public')));
app.use(favicon(__dirname + '/public/favicon.ico'));

app.use('/api', contactoService);
app.use('/api', noticiaService);
app.use('/api', proyectoService);
app.use('/api', bosquesService);
app.use('/api', donacionService);
app.use('/services/route', passportServices);
app.use('/api', passportFacebook);

app.set('port', process.env.PORT || 3000);
app.listen(app.get('port'));

console.log("Server started on 3000");