import angular from 'angular';

// Create the module where our functionality can attach to
let footprintModule = angular.module('app.footprint', []);

// Include our UI-Router config settings
import FootprintConfig from './footprint.config';
footprintModule.config(FootprintConfig);

// Controllers
import FootCtrl from './footprint.controller';
footprintModule.controller('FootCtrl', FootCtrl);

// //Services
// import HomeService from './home.service';
// homeModule.service('Home', HomeService);


export default footprintModule;