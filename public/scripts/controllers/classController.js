angular.module('isItReal')
  .controller('classController', classController);

classController.$inject=['$http', '$routeParams'];

function classController($http, $routeParams) {
  var vm = this;

  $http({
    method: 'GET',
    url: '/api/animals/' + $routeParams.type
  }).then(onIndexSuccess, onError)

  function onIndexSuccess(response){
    vm.animals = response.data;
  }
  function onError(error){
    console.log('there was an error: ', error);
  }
};
