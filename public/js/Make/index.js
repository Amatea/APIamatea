import angular from 'angular';

// Create the module where our functionality can attach to
let makeModule = angular.module('app.make', []);

// Include our UI-Router config settings
import MakeConfig from './make.config';
makeModule.config(MakeConfig);

// // Controllers
// import makeCtrl from './make.controller';
// makeModule.controller('makeCtrl', makeCtrl);

// //Services
// import makeService from './make.service';
// makeModule.service('make', makeService);


export default makeModule;