app.controller('labController', [
    '$scope','$timeout','$q','$http',
    function ($scope,$timeout,$q,$http) {

      $scope.model = {
        number:0,
        result:"Ready",
        status:"Ready"
      }

      let showRepos = (status,result)=>{
        $scope.model.status = status;
        $scope.model.repos = result;
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

      $scope.getRepos = getRepos;
    }
]);
