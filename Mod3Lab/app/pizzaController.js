app.controller('pizzaController', [
  '$scope',
  function($scope) {
    $scope.toppingAdded=false;
    $scope.model = {
      title: 'Pizza Builder',
      availableToppings: ['Cheese', 'Pepperoni', 'Bacon', 'Pineapple', 'Sausage', 'Ham', 'Chicken', 'Mushrooms', 'Onion', 'Olives', 'Green Peppers'],
      selectedToppings: []
    };
    $scope.addTopping = function(topping){
      $scope.model.selectedToppings.push(topping);
      $scope.model.search = null;
      $scope.toppingAdded = true;
    }
    $scope.reset = function(){
      $scope.toppingAdded=false;
    }
    $scope.filteredToppings = function(searchString){
      return $scope.model.availableToppings.filter((topping)=>{
        return topping.includes(searchString)
      })
    }
  }
]);
