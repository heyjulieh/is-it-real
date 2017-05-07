angular.module('isItReal')
  .controller('animalsController', animalsController);

animalsController.$inject=['$http'];

function animalsController($http) {
  var vm = this;

  $http({
    method: 'GET',
    url: '/api/animals'
  }).then(onIndexSuccess, onError)

  function onIndexSuccess(response){
    console.log(response.data)
    vm.animals = response.data;
  }
  function onError(error){
    console.log('there was an error: ', error);
  }
};
