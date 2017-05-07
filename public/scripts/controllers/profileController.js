angular.module('isItReal')
  .controller('profileController', profileController);

profileController.$inject=['$http', '$routeParams'];

function profileController($http, $routeParams) {
  var vm = this;

  $http({
    method: 'GET',
    url: '/api/animals/' + $routeParams.id
  }).then(onShowSuccess, onError);

  function onShowSuccess(response){
    console.log(response.data);
    vm.animal = response.data;
  }
  function onError(error){
    console.log('there was an error: ', error);
  }
}
