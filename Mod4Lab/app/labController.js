app.controller('labController', [
    '$scope','$timeout','$q','$http',
    function ($scope,$timeout,$q,$http) {

      $scope.model = {
        number:0,
        result:"Ready",
        status:"Ready"
      }

      let isNumberOdd = (number)=>{
        return !isNaN(number) && number%2 == 1;
      }

      let showMessage = (message)=>{
        $scope.model.result = message;
      };

      let showRepos = (status,result)=>{
        $scope.model.status = status;
        $scope.model.repos = result;
      }

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

      let getRepos = (repoUrl)=>{
        $scope.model.status = 'Working...';
        $http.get(repoUrl).then(
          (responce)=>{
            showRepos("Success",responce.data);
          },
          (responce)=>{
            showRepos('Error: '+responce.data.message,null);
          }
        );
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
      $scope.getRepos = getRepos;

    }
]);
