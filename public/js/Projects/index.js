import angular from 'angular';

// Create the module where our functionality can attach to
let projectsModule = angular.module('app.projects', []);

// Include our UI-Router config settings
import ProjectsConfig from './projects.config';
projectsModule.config(ProjectsConfig);

// Controllers
import ProjectCtrl from './projects.controller';
projectsModule.controller('ProjectCtrl', ProjectCtrl);

// //Services
// import HomeService from './home.service';
// homeModule.service('Home', HomeService);


export default projectsModule;