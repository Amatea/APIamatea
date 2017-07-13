function ProjectsConfig($stateProvider) {
  'ngInject';

  $stateProvider
  
  .state('Projects', {
      url: '/projects',
      templateUrl: 'js/Projects/projects.html',
      controller: 'ProjectCtrl'
    });
  
};

export default ProjectsConfig;