app.controller('formController', [
    '$scope',
    function ($scope) {
      $scope.fields = ["username","password","name","mobileNo","email"];
      $scope.registrationFieldType = {
        "username" : "text",
        "password" : "password",
        "name" : "text",
        "mobileNo" : "number",
        "email" : "email"
      }
      $scope.pizzaMenu = ["Cheese", "Pepperoni", "Margherita", "BBQ_Chicken", "Combo"];
    }
]);
