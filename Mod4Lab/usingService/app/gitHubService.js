var gitHubService = angular.module('gitHubService', ['ngResource'])

gitHubService.factory('gitHub', [
  '$resource',
  function ($resource) {
    return $resource('https://api.github.com/:action/:account/:id',
    {
      action: '@action',
      id: '@id'
    },
    {
      getAll: {
        method: 'GET',
        isArray: true,
        params: { id: 'repos' }
      },
      getDetail: {
        method: 'GET',
        params: { action: 'repos' }
      },
    });
  }
]);
