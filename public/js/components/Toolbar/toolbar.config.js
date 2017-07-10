function ToolbarConfig($stateProvider) {
  'ngInject';

  $stateProvider
  
  .state('Toolbar', {
      url: '/',
      templateUrl: 'js/toolbar/toolbar.html',
      controller: 'ToolbarCtrl'
    });
  
};

export default ToolbarConfig;