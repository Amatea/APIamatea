function AppConfig($urlRouterProvider, $mdThemingProvider, $translateProvider) {
  'ngInject';
  
  $mdThemingProvider.theme('default')
       .primaryPalette('light-green', {
        'default': '500',
        'hue-1': '700'
      }) 
       .accentPalette('orange');

  
  $urlRouterProvider.otherwise('/');

  $translateProvider.useStaticFilesLoader({
      'prefix': 'locale-',
      'suffix': '.json'
  });
  
  $translateProvider.preferredLanguage('es');
  $translateProvider.forceAsyncReload(true);

}

export default AppConfig;