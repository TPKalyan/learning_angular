app.controller('menuController',[
  '$scope',
  function($scope) {
    $scope.model = {title:"our menu"};
    $scope.changeMainDish = function(item){
      $scope.model.mainDish = item;
    }
    $scope.$watch('model.mainDish',(newValue,oldValue)=>{
      if(newValue == "Pepperoni Pizza"){
        alert('you have Selected Pepperoni Pizza');
      }
    });
  }
])
