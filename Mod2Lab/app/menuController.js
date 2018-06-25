app.controller('menuController',[
  '$scope',
  function($scope) {
    $scope.model = {title:"our menu"};
    $scope.changeMainDish = function(item){
      $scope.model.mainDish = item;
    }
  }
])
