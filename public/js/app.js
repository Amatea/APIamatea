import angular from 'angular'

// Import our app config files
import appConfig  from './config/app.config'

import 'angular-ui-router';
import 'angular-css';
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

import './Contact'
import './Footprint'
import './Home'
import './Make'
import './Services'
import './components/Toolbar'
import './components/Trademarks'
import './components/Our'
import './Projects'
import './Restauration'
import './components/Footer'

const requires = [
  'ui.router',
  'ngResource',
  'angularCSS',
  'ngRoute',
  'leaflet-directive',
  'ngAnimate',
  'ngAria',
  'ngMessages',
  'ngMaterial',
  'ngSanitize',
  'pascalprecht.translate',

  'app.contact',
  'app.footprint',
  'app.home',
  'app.make',
  'app.services',
  'app.toolbar',
  'app.trademarks',
  'app.our',
  'app.projects',
  'app.restauration',
  'app.footer'
  ];

  window.App = angular.module('App', requires);

  angular.module('App').config(appConfig)

  .factory('Donacion', ['$resource', function($resource){
	return $resource('api/donaciones/:id', {id: '@_id'}, {
		update: { method: 'PUT'},
		get: { method: 'GET', isArray: false},
	})
}]);