import angular from 'angular';

// Create the module where our functionality can attach to
let restaurationModule = angular.module('app.restauration', []);

// Include our UI-Router config settings
import RestaurationConfig from './restauration.config';
restaurationModule.config(RestaurationConfig);

// Controllers
import RestaurationCtrl from './restauration.controller';
restaurationModule.controller('RestaurationCtrl', RestaurationCtrl);

// //Services
// import HomeService from './home.service';
// homeModule.service('Home', HomeService);


export default restaurationModule;