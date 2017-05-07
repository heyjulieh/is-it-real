angular.module('isItReal')
  .controller('profileController', profileController);

profileController.$inject=['$http', '$routeParams'];

function profileController($http, $routeParams) {
  var id = $routeParams.id;

  var vm = this;
  $http({
    method: 'GET',
    url: '/api/animal/' + id
  }).then(onShowSuccess, onError);

  function onShowSuccess(response){
    vm.animal = response.data;
  }
  function onError(error){
    console.log('there was an error: ', error);
  }
}
