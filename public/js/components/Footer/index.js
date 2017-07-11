import angular from 'angular';

// Create the module where our functionality can attach to
let footerModule = angular.module('app.footer', []);

// Components
import FooterApp from './footer.component';
footerModule.component('footerApp', FooterApp);


export default footerModule;
