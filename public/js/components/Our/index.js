import angular from 'angular';

// Create the module where our functionality can attach to
let ourModule = angular.module('app.our', []);

// Components
import OurApp from './our.component';
ourModule.component('ourApp', OurApp);


export default ourModule;
