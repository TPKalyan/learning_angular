app.controller('menuController',[
  '$scope',
  function($scope) {
    $scope.model = {title:"our menu",mainDish:{}};
    $scope.changeMainDish = function(itemName,price){
      $scope.model.mainDish.title = itemName;
      $scope.model.mainDish.price = price;
    }
  }
])
