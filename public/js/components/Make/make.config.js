function MakeConfig($stateProvider) {
  'ngInject';

  $stateProvider
  
  .state('Make', {
      url: '/make',
      templateUrl: 'js/Components/Make/make.html',
      
    });
  
};

export default MakeConfig;