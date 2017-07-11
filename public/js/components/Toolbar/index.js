import angular from 'angular';

// Create the module where our functionality can attach to
let toolbarModule = angular.module('app.toolbar', []);

// Components
import ToolbarApp from './toolbar.component';
toolbarModule.component('toolbarApp', ToolbarApp);


export default toolbarModule;
