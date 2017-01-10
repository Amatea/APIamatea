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
const chalk         = require('chalk');
const dotenv        = require('dotenv');

dotenv.load({ path: '.env.eco' });


var contactoService=require('./services/contactoroute');
var noticiaService=require('./services/noticiaroute');
var proyectoService=require('./services/proyectoroute');
var bosquesService=require('./services/bosqueroute');
var donacionService=require('./services/donacionroute');
var passportServices=require('./services/route');
var passportFacebook=require('./services/passport');

/**
 * Connect to MongoDB.
 */
mongoose.Promise = global.Promise;
mongoose.connect(process.env.MONGODB_URI || process.env.MONGOLAB_URI);
mongoose.connection.on('error', () => {
  console.log('%s MongoDB connection error. Please make sure MongoDB is running.', chalk.red('✗'));
  process.exit();
});

var app = express();

app.set('port', process.env.PORT || 3000);
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


app.listen(app.get('port'), () => {
  console.log('%s App is running at http://localhost:%d in %s mode', chalk.blue('✓'), app.get('port'), app.get('env')); 
  console.log('  Press CTRL-C to stop\n');
});