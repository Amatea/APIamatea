function HomeConfig($stateProvider) {
  'ngInject';

  $stateProvider
  
  .state('home', {
      url: '/',
      templateUrl: 'js/Home/home.html',
      
    });
  
};

export default HomeConfig;