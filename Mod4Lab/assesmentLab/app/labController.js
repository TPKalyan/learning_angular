app.controller('labController', [
    '$scope','$timeout','$q','$http','gitHub',
    function ($scope,$timeout,$q,$http,gitHub) {

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

      let getRepos = (username)=>{
        $scope.model.detail = null;
        $scope.model.repos = gitHub.getAll({action:'users',account:username});
      }

      let loadDetails = (username,name)=>{
        $scope.model.detail = gitHub.getDetail({account:username,id:name});
      }

      $scope.getRepos = getRepos;
      $scope.loadDetails = loadDetails;
    }
]);
