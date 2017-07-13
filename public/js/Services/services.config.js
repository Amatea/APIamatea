function ServicesConfig($stateProvider) {
  'ngInject';

  $stateProvider
  
  .state('Services', {
      url: '/services',
      templateUrl: 'js/Services/services.html',
      
    });
  
};

export default ServicesConfig;