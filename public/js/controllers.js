var app = angular.module('amateaControllers', []);

app.controller("contactoController", function ($http, $scope, $location, Contacto) {
    
    $scope.contacto = Contacto.query();


    $scope.contactos = new Contacto();

    $scope.addContacto = function() {
    $scope.contactos.$save()
    $location.path('/');
    };

    $scope.postData = {};

    $scope.postMail = function (contacto) { // parametro debe serigual al $scope de los datos (contacto)
     
     
      // wrap all your input values in $scope.postData
      $scope.postData = angular.copy(contacto);

      $http.post('api/mail_contacto', $scope.postData)
        .success(function(data) {
          // Show success message
        })
        .error(function(data) {
          // Show error message
        });
    };


});

app.controller("noticiaController", function ($scope, $location, Noticia){
    $scope.noticia = Noticia.query();


    $scope.noticias = new Noticia();

    $scope.addNoticia = function() {
        $scope.noticias.$save()
        $location.path('/admin');
    };
});

app.controller("noticiadetalleController", function ($scope, $location, $routeParams, Noticia){

  $scope.noticia = Noticia.show({id: $routeParams._id}, function(dato){
      console.log(dato)
  });
});


app.controller('bosquesController', function($scope, Bosque) {
    $scope.usuario = Bosque.query();

    $scope.transporte = ('SI NO').split(' ').map(function(transporte) {
        return {abbrev: transporte};
      })
    $scope.bosque = new Bosque();

    $scope.addUsuario = function() { //create a new movie. Issues a POST to /api/movies
    $scope.bosque.$save() 
    };

    $scope.deleteusuario = function (userId) {
            Bosque.delete({ id: userId });
            $scope.usuario = Bosque.query();
        };

    $scope.getTotalinscritos = function(){
      return $scope.usuario.length;
    }
    

  });

app.controller('bosquesgController', function($scope, Bosque) {
    $scope.usuario = Bosque.query();
   })

app.controller('footerCtrl', function($scope, $mdDialog, $mdMedia, Donacion){
    $scope.donacion = new Donacion();

    $scope.addDonacion = function() { //create a new movie. Issues a POST to /api/movies
    $scope.donacion.$save() 
    };

    $scope.postData = {};
    $scope.postMail = function (donacion) { // parametro debe serigual al $scope de los datos (contacto)
      // wrap all your input values in $scope.postData
      $scope.postData = angular.copy(donacion);

      $http.post('api/mail_donacion', $scope.postData)
        .success(function(data) {
        })
        .error(function(data) {
        });
    };


    $scope.status = '  ';
  $scope.customFullscreen = $mdMedia('xs') || $mdMedia('sm');
  $scope.showAlert = function(ev) {
    // Appending dialog to document.body to cover sidenav in docs app
    // Modal dialogs should fully cover application
    // to prevent interaction outside of dialog
    $mdDialog.show(
      $mdDialog.alert()
        .parent(angular.element(document.querySelector('#popupContainer')))
        .clickOutsideToClose(true)
        .title('Ya casi, siembras tu Árbol!!')
        .textContent('Nos pondremos en contacto pronto!!')
        .ariaLabel('Alert Dialog Demo')
        .ok('continua!')
        .targetEvent(ev)
    );
  };

})

app.controller('restauracionController', function($scope, leafletData){

  angular.extend($scope, {
        
        defaults: {
            scrollWheelZoom: false
        },

        markers: {
                    cumbre: {
                        lat: 3.6476444587930907, 
                        lng: -76.56929969787596,
                        message: "La Cumbre",
                        focus: false
                    },

                    mulalo: {
                        lat: 3.644244947716166,
                        lng: -76.49186432361603,
                        message: "mulalo",
                        focus: false
                    },

                    piedragrande: {
                        lat: 3.450944580701558,
                        lng: -76.59168004989623,
                        message: "piedragrande",
                        focus: false
                    },

                    arbolito: {
                        lat: 3.4420718167584,
                        lng: -76.60539686679839,
                        message: "Arbolito",
                        focus: false
                    },

                    cajita: {
                        lat: 3.451378310552176,
                        lng: -76.61656558513641,
                        message: "La Cajita",
                        focus: false
                    },

                    yolanda: {
                        lat: 3.4223982967446647,
                        lng: -76.6260015964508,
                        message: "La Yolanda",
                        focus: false
                    },

                    danubio: {
                        lat: 3.421937779452153,
                        lng: -76.6534674167633,
                        message: "Danubio",
                        focus: false
                    },

                    valencia: {
                        lat: 3.4212148739535606,
                        lng: -76.64283514022827,
                        message: "Valencia",
                        focus: false
                    },

                    yanaconas: {
                        lat: 3.4269445544112576,
                        lng: -76.6040825843811,
                        message: "Yanaconas",
                        focus: false
                    },

                    pance: {
                        lat: 3.322991091624113,
                        lng: -76.59765601158142,
                        message: "Pance",
                        focus: false
                    },
                },

    });



  $scope.regions = {

                general: {
                    northEast: {
                        lat: 3.8656247834774597,
                        lng: -76.1407470703125
                    },
                    southWest: {
                        lat: 3.2077041274093783,
                        lng: -77.04299926757812
                    }
                },
                parquenacional: {
                    southWest: {
                        lat: 3.3012800677970304,
                        lng: -76.75769805908203
                    },
                    northEast: {
                        lat: 3.465787667313853,
                        lng: -76.51187896728516
                    }
                },
                yanaconas: {
                    southWest: {
                        lat: 3.4217075207229035,
                        lng: -76.61041259765624
                    },
                    northEast: {
                        lat: 3.431988786752452,
                        lng: -76.59504890441895
                    }
                }
            };

  angular.extend($scope, {
                maxbounds: $scope.regions.general
            });


});


// ---------Administrador

app.controller('AdminCtrl', function($scope, $http) {
  // List of users got from the server
  $scope.users = [];

  // Fill the array to display it in the page
  $http.get('/services/route/users').success(function(users){
    for (var i in users)
      $scope.users.push(users[i]);
  });
});

app.controller('LoginCtrl', function($scope, $rootScope, $http, $location) {
  // This object will be filled by the form
  $scope.user = {};

  // Register the login() function
  $scope.login = function(){
    $http.post('/services/route/login', {
      username: $scope.user.username,
      password: $scope.user.password,
    })
    .success(function(user){
      // No error: authentication OK
      $rootScope.message = 'Usuario Autenticado!';
      $location.url('/services/route/admin');
    })
    .error(function(){
      // Error: authentication failed
      $rootScope.message = 'Autenticacion Fallida.';
      $location.url('/services/route/login');
    });
  };
});

app.controller('botondonacionesController', function($scope, $http, Donacion){
  $scope.donacion = Donacion.query();

  $scope.deletedonacion = function (userId) {
            Donacion.delete({ id: userId });
            $scope.donacion = Donacion.query();
        };

  $scope.getTotalinscritos = function(){
      return $scope.donacion.length;
    }

  $scope.estadoDonacion = function(donaciones){
        donaciones.estado = (donaciones.estado=="Enviado" ? "Pendiente" : "Enviado");
        $http.put("api/donaciones/"+donaciones._id,{estado:donaciones.estado});
    };
})

app.controller('siembraController', function($scope, $location, Donacion){

  $scope.donacion = Donacion.query();

  $scope.donaciones = new Donacion();

    $scope.addDonacion = function() {
    $scope.donaciones.$save()
    $location.path('/gracias');
    };

})

app.controller("proyectoController", function ($scope ,$http, Proyecto){
    $scope.proyecto = Proyecto.query();
});

// ---------Toolbar angular material

app.controller('AppCtrl', function ($scope, $timeout, $mdSidenav, $log) {

    $scope.toggleRight = buildToggler('right');
    $scope.isOpenRight = function(){
      return $mdSidenav('right').isOpen();
    };
    /**
     * Supplies a function that will continue to operate until the
     * time is up.
     */
    function debounce(func, wait, context) {
      var timer;
      return function debounced() {
        var context = $scope,
            args = Array.prototype.slice.call(arguments);
        $timeout.cancel(timer);
        timer = $timeout(function() {
          timer = undefined;
          func.apply(context, args);
        }, wait || 10);
      };
    }
    /**
     * Build handler to open/close a SideNav; when animation finishes
     * report completion in console
     */
    
    function buildToggler(navID) {
      return function() {
        // Component lookup should always be available since we are not using `ng-if`
        $mdSidenav(navID)
          .toggle()
          .then(function () {
            $log.debug("toggle " + navID + " is done");
          });
      }
    }
  })
  
  .controller('RightCtrl', function ($scope, $timeout, $mdSidenav, $log) {
    $scope.close = function () {
      // Component lookup should always be available since we are not using `ng-if`
      $mdSidenav('right').close()
        .then(function () {
          $log.debug("close RIGHT is done");
        });
    };
  });

//------------------APIDENDROS

app.controller('aveController', function($scope, Ave, $routeParams){
  $scope.ave = Ave.query();
  $scope.letter = 60;

})

app.controller('avedetalleController', function($scope, $location, $routeParams, Ave){
  
  $scope.ave = Ave.show({id: $routeParams.id}, function(dato){
      console.log(dato)
    });
})




