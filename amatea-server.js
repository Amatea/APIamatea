const express = require('express');
const path = require('path');
const bodyParser = require('body-parser');
const morgan    		= require('morgan');
const cookieParser 	= require('cookie-parser');
const session   		= require('express-session');
const methodOverride 	= require('method-override');
const passport 		= require('passport');
const LocalStrategy 	= require('passport-local').Strategy;
const FacebookStrategy = require('passport-facebook').Strategy;
const favicon 		= require('serve-favicon');
const mongoose		= require('mongoose');
const config          = require('./config');
const chalk         = require('chalk');
const dotenv        = require('dotenv');

dotenv.load({ path: '.env.eco' });

const homeController = require('./controllers/home'); 

const contactoService=require('./services/contactoroute');
const noticiaService=require('./services/noticiaroute');
const proyectoService=require('./services/proyectoroute');
const bosquesService=require('./services/bosqueroute');
const donacionService=require('./services/donacionroute');
const passportServices=require('./services/route');
const passportFacebook=require('./services/passport');
const mailService = require('./services/nodemail');

/**
 * Connect to MongoDB.
 */
mongoose.Promise = global.Promise;
mongoose.connect(process.env.MONGODB_URILO);
mongoose.connection.on('error', () => {
  console.log('%s MongoDB connection error. Please make sure MongoDB is running.', chalk.red('✗'));
  process.exit();
});

var app = express();

app.set('port', process.env.PORT || 3000);
app.use(morgan('dev'));
app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'pug');
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

app.use('/api', mailService);

app.get('/bosquesparavolar', homeController.index);
app.post('/bosquesparavolar', homeController.inscripcion);


app.listen(app.get('port'), () => {
  console.log('%s App is running at http://localhost:%d in %s mode', chalk.blue('✓'), app.get('port'), app.get('env')); 
  console.log('  Press CTRL-C to stop\n');
});