var App = angular.module('App', [
  'ngRoute',
  'ngResource',
  'amateaControllers',
  'amateaDirectives',
  'amateaServices',
  'leaflet-directive',
  'ngMaterial', 
  'ngMessages',
  'angular-svg-round-progressbar'
  ])
    

App.config( ['$routeProvider', '$locationProvider', '$httpProvider', function ($routeProvider, $locationProvider, $httpProvider ) {
    
      $routeProvider.
        when('/', {
            title: 'Amatea:: Ser y Naturaleza',
            templateUrl: 'partial/inicio.html',
            controller: 'noticiaController'  
        }).

        when('/somos', {
          title:'Somos ::',
          templateUrl: 'partial/inicio.html',
          controller: 'noticiaController' 
        }).

        when('/servicios', {
          title:'Servicios ::',
          templateUrl: 'partial/servicios.html',   
        }).

        when('/hacemos', {
          title: 'Hacemos ::',
          templateUrl: 'partial/hacemos.html',   
        }).

        when('/contactenos', {
          title:'Contactenos ::',
          templateUrl: 'partial/contactenos.html',
          controller: 'contactoController'   
        })

        .when('/noticiasDetalle/:_id', {
          title:'Noticias ::',
          templateUrl: 'partial/noticiasDetalle.html',
          controller: 'noticiadetalleController'   
        })

        .when('/proyectos/', {
          title:'Proyectos ::',
          templateUrl: 'partial/proyectos.html',
          controller: 'proyectoController'   
        })

        .when('/socios/', {
          title:'Socios ::',
          templateUrl: 'partial/socios.html'   
        })

        .when('/bosquesparavolar/', {
          title:'  bosquesparavolar ::',
          templateUrl: 'partial/bosquesparavolar.html',
          controller: 'bosquesController'   
           
        })

        .when('/bosques_gracias/', {
          title:'  bosquesparavolar ::',
          templateUrl: 'partial/bosques_gracias.html',
          controller: 'siembraController'   
           
        })

        .when('/restauracion/', {
          title:'  Restauracion ::',
          templateUrl: 'partial/restauracion/restauracion.html',
          controller: 'restauracionController'   
           
        })

}]);

//----------------------------------------

App.config(function($mdThemingProvider) {
    // Configure a dark theme with primary foreground yellow
    $mdThemingProvider.theme('default')
      .primaryPalette('light-green')
      .accentPalette('orange');
      
    

});


