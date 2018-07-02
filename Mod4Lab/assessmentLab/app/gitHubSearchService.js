var gitHubService = angular.module('gitHubService', ['ngResource'])

gitHubService.factory('gitHub', [
  '$resource',
  function ($resource) {
    return $resource('https://api.github.com/search/repositories',
    {
      q: '@q'
    },
    {
      getAll: {
        method: 'GET',
        isArray: false
      }
    });
  }
]);
