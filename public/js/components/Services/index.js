import angular from 'angular';

// Create the module where our functionality can attach to
let servicesModule = angular.module('app.services', []);

// Include our UI-Router config settings
import ServicesConfig from './services.config';
servicesModule.config(ServicesConfig);

// // Controllers
// import HomeCtrl from './home.controller';
// homeModule.controller('HomeCtrl', HomeCtrl);

// //Services
// import HomeService from './home.service';
// homeModule.service('Home', HomeService);


export default servicesModule;