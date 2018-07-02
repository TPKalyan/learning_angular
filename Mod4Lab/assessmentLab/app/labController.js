app.controller('labController', [
    '$scope','$timeout','$q','$http','gitHub',
    function ($scope,$timeout,$q,$http,gitHub) {

      $scope.model = {
        status : "Ready"
      }

      let getRepos = (seachText)=>{
        $scope.model.status = "Working...";
        gitHub.getAll({q:seachText}).$promise.then((response)=>{
          $scope.model.status = "Success";
          $scope.model.repos = response.items;
        },
        (response)=>{

        }
      );
      }
      $scope.getRepos = getRepos;
    }
]);
