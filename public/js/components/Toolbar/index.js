import angular from 'angular';

// Create the module where our functionality can attach to
let toolbarModule = angular.module('app.toolbar', []);

// Components toolbar
import ToolbarConfig from './toolbar.config';
ToolbarConfig .config(ToolbarConfig);

// Controllers
import ToolbarCtrl from './toolbar.controller';
toolbarModule.controller('ToolbarCtrl', ToolbarCtrl);

// //Services
// import HomeService from './home.service';
// homeModule.service('Home', HomeService);


export default toolbarModule;
