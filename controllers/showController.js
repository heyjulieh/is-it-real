angular.module('isItReal')
  .controller('showController', showController);

showController.$inject=['$http', '$routeParams', '$location'];
function showController($http, $routeParams, $location) {
  var vm = this;
  var pokemonId = $routeParams.id;

  $http({
    method: 'GET',
    url: 'https://super-crud.herokuapp.com/pokemon/'+pokemonId
  }).then(onShowSuccess, onError);

  function onShowSuccess(response){
    console.log('here\'s the data for pokemon', pokemonId, ':', response.data);
    vm.pokemon = response.data;
  }
  function onError(error){
    console.log('there was an error: ', error);
  }
}
