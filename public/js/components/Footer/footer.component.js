class FooterCtrl {
  constructor($scope, $http, Donacion, $mdMedia, $mdDialog) {
    'ngInject';

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
        )
      }
    
  }
}

let FooterConfig = {
  templateUrl: 'js/components/Footer/footer.html',
  controller: FooterCtrl,
};

export default FooterConfig;