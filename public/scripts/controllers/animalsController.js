angular.module('isItReal')
  .controller('animalsController', animalsController);

animalsController.$inject=['$http', '$routeParams'];

function animalsController($http, $routeParams) {
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
