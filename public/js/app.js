var app = angular.module('App', [
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
    

app.config( ['$routeProvider', '$locationProvider', '$httpProvider', function ($routeProvider, $locationProvider, $httpProvider ) {
    
    //================================================
    // Check if the user is connected
    //================================================
    var checkLoggedin = function($q, $timeout, $http, $location, $rootScope){
      // Initialize a new promise
      var deferred = $q.defer();

      // Make an AJAX call to check if the user is logged in
      $http.get('/services/route/loggedin').success(function(user){
        // Authenticated
        if (user !== '0')
          /*$timeout(deferred.resolve, 0);*/
          deferred.resolve();

        // Not Authenticated
        else {
          $rootScope.message = 'Necesitas iniciar sesion';
          //$timeout(function(){deferred.reject();}, 0);
          deferred.reject();
          $location.url('/login');
        }
      });

      return deferred.promise;
    };
    //================================================
    
    //================================================
    // Add an interceptor for AJAX errors
    //================================================
    $httpProvider.interceptors.push(function($q, $location) {
      return {
        response: function(response) {
          // do something on success
          return response;
        },
        responseError: function(response) {
          if (response.status === 401)
            $location.url('/login');
          return $q.reject(response);
        }
      };
    });

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

//------------------- administrador

        .when('/admin', {
        title:'  Administracion ::',
        templateUrl: 'partial/administracion/inicio.html',
        controller: 'AdminCtrl',
        resolve: {
          loggedin: checkLoggedin
          }
        })

        .when('/login', {
          title:'  Administracion ::',
          templateUrl: 'partial/administracion/login.html',
          controller: 'LoginCtrl'
        })

        .when('/boton_donaciones', {
          title:'  Administracion ::',
          templateUrl: 'partial/administracion/boton_donaciones.html',
          controller: 'botondonacionesController'
        })

        .when('/inscritos', {
          title:'  Administracion ::',
          templateUrl: 'partial/administracion/inscritos.html',
          controller: 'bosquesController'
        })

        .when('/insertar_noticia', {
          title:'  Administracion ::',
          templateUrl: 'partial/administracion/ins_noticia.html',
          controller: 'noticiaController'
        })

        .when('/proyectos_admin', {
          title:'  Administracion ::',
          templateUrl: 'partial/administracion/proyectos.html',
          controller: 'proyectoController'
        })

        .when('/insertar_proyecto', {
          title:'  Administracion ::',
          templateUrl: 'partial/administracion/ins_proyecto.html',
          controller: 'proyectoController'
        })

        .when('/editar_proyecto/:id', {
          title:'  Administracion ::',
          templateUrl: 'partial/administracion/edit_proyecto.html',
          controller: 'proyectoController'
        })

        .when('/contactos', {
          title:'Contactenos ::',
          templateUrl: 'partial/administracion/contactos.html',
          controller: 'contactoController'   
        })

        .when('/siembratuarbol', {
          title:'  Siembra Tú Árbol ::',
          templateUrl: 'partial/siembratuarbol.html',
          controller: 'siembraController'
        })

        .when('/aves', {
          title:'  Aves ::',
          templateUrl: 'partial/apidendros/ave.html',
          controller: 'aveController'
        })

        .when('/avedetalle/:id', {
          title:'  Aves ::',
          templateUrl: 'partial/apidendros/avedetalle.html',
          controller: 'avedetalleController'
        })

        .otherwise({
            redirectTo: '/'
        });

}]);

//----------------------------------------

app.run(['$rootScope', '$route', '$http', function($rootScope, $route, $http) {
    $rootScope.$on('$routeChangeSuccess', function() {
        document.title = $route.current.title;
    });

    $rootScope.message = '';

    // Logout function is available in any pages
    $rootScope.logout = function(){
      $rootScope.message = 'Sesion Cerrada.';
      $http.post('/services/route/logout');
    };

}]);

app.config(function($mdThemingProvider) {
    // Configure a dark theme with primary foreground yellow
    $mdThemingProvider.theme('docs-dark', 'default')
      .primaryPalette('light-green')
      .dark();

    $mdThemingProvider.definePalette('paletteAmatea', {
    '50': '#F1F8E9',
    '100': '#DCEDC8',
    '200': '#C5E1A5',
    '300': '#AED581',
    '400': '#9CCC65',
    '500': '#8BC34A',
    '600': '#7ED321',
    '700': '#689F38',
    '800': '#558B2F',
    '900': '#114948',
    'A100': 'ff8a80',
    'A200': 'ff5252',
    'A400': 'ff1744',
    'A700': 'd50000',
    'contrastDefaultColor': 'light',    // whether, by default, text (contrast)
                                        // on this palette should be dark or light
    'contrastDarkColors': ['50', '100', //hues which contrast should be 'dark' by default
     '200', '300', '400', 'A100'],
    'contrastLightColors': undefined    // could also specify this if default was 'dark'
  });

    $mdThemingProvider.theme('amatea-theme')
      .primaryPalette('paletteAmatea', {
      'default': '400', // by default use shade 400 from the pink palette for primary intentions
      'hue-1': '100', // use shade 100 for the <code>md-hue-1</code> class
      'hue-2': '600', // use shade 600 for the <code>md-hue-2</code> class
      'hue-3': '900' // use shade A100 for the <code>md-hue-3</code> class
    })
  

    $mdThemingProvider.theme('amatea-theme-footer')
      .primaryPalette('paletteAmatea', {
      'default': '400', // by default use shade 400 from the pink palette for primary intentions
      'hue-1': '100', // use shade 100 for the <code>md-hue-1</code> class
      'hue-2': '600', // use shade 600 for the <code>md-hue-2</code> class
      'hue-3': '900' // use shade A100 for the <code>md-hue-3</code> class
    })
      .backgroundPalette('grey', {
                'default': '900'
              })
      .dark()
});


