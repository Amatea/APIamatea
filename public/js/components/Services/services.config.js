function ServicesConfig($stateProvider) {
  'ngInject';

  $stateProvider
  
  .state('Services', {
      url: '/services',
      templateUrl: 'js/Components/Services/services.html',
      
    });
  
};

export default ServicesConfig;