function HomeConfig($stateProvider) {
  'ngInject';

  $stateProvider
  
  .state('home', {
      url: '/',
      templateUrl: 'js/Components/Home/home.html',
      
    });
  
};

export default HomeConfig;