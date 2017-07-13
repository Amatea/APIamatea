function RestaurationConfig($stateProvider) {
  'ngInject';

  $stateProvider
  
  .state('Restauration', {
      url: '/restauration',
      templateUrl: 'js/Restauration/restauration.html',
      controller: 'RestaurationCtrl'
    });
  
};

export default RestaurationConfig;