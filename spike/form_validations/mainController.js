app.controller('mainController',[
  '$scope',
  function($scope){
    $scope.login = {};
    $scope.required = false;
    $scope.model = {
      name:""
    }
  }
]);
