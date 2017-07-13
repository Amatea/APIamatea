function FootprintConfig($stateProvider) {
  'ngInject';

  $stateProvider
  
  .state('Footprint', {
      url: '/footprint',
      templateUrl: 'js/Footprint/footprint.html',
      
    });
  
};

export default FootprintConfig;