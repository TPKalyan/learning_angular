app.controller('labController', [
    '$scope','$timeout','$q',
    function ($scope,$timeout,$q) {

      $scope.model = {
        number:0,
        result:"Ready"
      }

      let isNumberOdd = (number)=>{
        return !isNaN(number) && number%2 == 1;
      }

      let showMessage = (message)=>{
        $scope.model.result = message;
      };

      let checkOddNumberHandler = (number)=>{
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

      let checkOddNumber = function(number){
        $scope.model.result = 'Working...';
        checkOddNumberHandler(number).then(function(result){
          showMessage('Success: ' + result);
        },
        function(result){
          showMessage('Error: ' + result);
        });
      }


      $scope.checkOddNumber = checkOddNumber;
    }
]);
