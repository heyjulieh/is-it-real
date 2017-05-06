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
    console.log('here\'s the get all response data', response.data);
    vm.pokemons = response.data.pokemons;
  }
  function onError(error){
    console.log('there was an error: ', error);
  }
};
