function FootprintConfig($stateProvider) {
  'ngInject';

  $stateProvider
  
  .state('Footprint', {
      url: '/footprint',
      templateUrl: 'js/Footprint/footprint.html',
      controller: 'FootCtrl',
      css: 'js/Footprint/footprint.css'
    });
  
};

export default FootprintConfig;