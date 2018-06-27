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

      let showDetails = (result)=>{
        $scope.model.detail = result;
      }

      let getRepos = (repoUrl)=>{
        $scope.model.status = 'Working...';
        $scope.model.detail = "";
        $http.get(repoUrl).then(
          (responce)=>{
            showRepos("Success",responce.data);
          },
          (responce)=>{
            showRepos('Error: '+responce.data.message,null);
          }
        );
      }

      let loadDetails = (repoURL)=>{
        $http.get(repoURL).then(
          (responce)=>{
            showDetails(responce.data);
          },
          (responce)=>{
            showDetails({ error: true, message: 'Error: ' + response.data.message });
          }
        );
      }

      $scope.getRepos = getRepos;
      $scope.loadDetails = loadDetails;
    }
]);
