class ContactCtrl {
  constructor($scope) {
    'ngInject';

    $scope.contacto = function() {
      http
    }




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

  }

}

export default ContactCtrl;