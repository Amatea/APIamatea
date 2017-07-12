function ProjectsConfig($stateProvider) {
  'ngInject';

  $stateProvider
  
  .state('Projects', {
      url: '/projects',
      templateUrl: 'js/Components/Projects/projects.html',
      controller: 'ProjectCtrl'
    });
  
};

export default ProjectsConfig;