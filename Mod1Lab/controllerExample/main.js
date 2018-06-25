var app = angular.module("app",[]);
app.controller("myController",[
  '$scope',
  function ($scope) {
    $scope.title="Home";
    $scope.renameTitle = function(newTitle){
      $scope.title = newTitle;
    }
  }
])
