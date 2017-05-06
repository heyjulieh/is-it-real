angular.module('isItReal')
  .controller('indexController', indexController);

indexController.$inject=['$http'];
function indexController($http) {
  var vm = this;

  $http({
    method: 'GET',
    url: 'https://super-crud.herokuapp.com/pokemon'
  }).then(onIndexSuccess, onError)

  function onIndexSuccess(response){
    vm.animals = response.data.pokemons;
  }
  function onError(error){
    console.log('there was an error: ', error);
  }
};
