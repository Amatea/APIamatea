function RestaurationConfig($stateProvider) {
  'ngInject';

  $stateProvider
  
  .state('Restauration', {
      url: '/restauration',
      templateUrl: 'js/Components/Restauration/restauration.html',
      controller: 'RestaurationCtrl'
    });
  
};

export default RestaurationConfig;