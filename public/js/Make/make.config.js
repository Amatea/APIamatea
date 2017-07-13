function MakeConfig($stateProvider) {
  'ngInject';

  $stateProvider
  
  .state('Make', {
      url: '/make',
      templateUrl: 'js/Make/make.html',
      
    });
  
};

export default MakeConfig;