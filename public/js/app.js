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

import './components/Toolbar'

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

  'app.toolbar'
  ];

  window.App = angular.module('App', requires);

  angular.module('App').config(appConfig)