app.controller('labController', [
    '$scope','$timeout','$q',
    function ($scope,$timeout,$q) {
      $scope.model = {
        number:0,
        result:"Ready"
      }

      $scope.checkOddNumber = function(number){
        $scope.model.result = 'Working...';
        checkOddNumberHandler(number).then(function(result){
          $scope.model.result = 'Success: ' + result;
        },
        function(result){
          $scope.model.result = 'Error: ' + result;
        });
      }

      function checkOddNumberHandler(number){
        var defer = $q.defer();

        $timeout(function(){
          if (isNumberOdd(number)) {
            defer.resolve('Yes,'+number+' is odd');
          }else{
            defer.reject('No,'+number+' is not odd');
          }
        },1000);
        return defer.promise;
      }

      let isNumberOdd = (number)=>{
        return !isNaN(number) && number%2 == 1;
      }
    }
]);
