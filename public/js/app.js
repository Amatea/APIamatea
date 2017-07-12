import angular from 'angular';

// Import our app config files
import appConfig  from './config/app.config';

import 'angular-ui-router';
import 'angular-aria';
import 'angular-resource';
import 'angular-route';
import 'angular-animate';
import 'angular-sanitize';
import 'angular-messages';
import 'angular-material';
import 'angular-leaflet-directive';
import 'angular-translate'
import 'angular-translate-loader-static-files'

import './components/Home'
import './components/Services'
import './components/Toolbar'
import './components/Trademarks'
import './components/Footer'

const requires = [
  'ui.router',
  'ngResource',
  'ngRoute',
  'leaflet-directive',
  'ngAnimate',
  'ngAria',
  'ngMessages',
  'ngMaterial',
  'ngSanitize',
  'pascalprecht.translate',

  'app.home',
  'app.services',
  'app.toolbar',
  'app.trademarks',
  'app.footer'
  ];

  window.App = angular.module('App', requires);

  angular.module('App').config(appConfig)