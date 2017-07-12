import angular from 'angular';

// Create the module where our functionality can attach to
let contactModule = angular.module('app.contact', []);

// Include our UI-Router config settings
import ContactConfig from './contact.config';
contactModule.config(ContactConfig);

// Controllers
import ContactCtrl from './contact.controller';
contactModule.controller('contactCtrl', ContactCtrl);

// //Services
// import makeService from './make.service';
// makeModule.service('make', makeService);


export default contactModule;