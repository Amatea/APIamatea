class ToolbarCtrl {
  constructor($scope, $http, $stateParams, Toolbar, $location) {
    'ngInject';

    $scope.authentication = Toolbar;
    
  }

}

export default ToolbarCtrl;