app.controller('mainController',[
  '$scope',
  function($scope){
    $scope.people = [{
        'name': 'Mickey Mouse',
        'type': 'mouse',
        'gender': 'male'
      },
      {
        'name': 'Donald Duck',
        'type': 'duck',
        'gender': 'male'
      },
      {
        'name': 'Minnie Mouse',
        'type': 'mouse',
        'gender': 'female'
      },
      {
        'name': 'Daisy Duck',
        'type': 'duck',
        'gender': 'female'
      },
      {
        'name': 'Goofy',
        'type': 'dog?',
        'gender': 'male'
      }
    ]
  }
]);
