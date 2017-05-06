angular.module('isItReal', ['ngRoute'])
       .config(config);


////////////
// ROUTES //
////////////

config.$inject = ['$routeProvider', '$locationProvider'];
function config (  $routeProvider,   $locationProvider  )  {
  $routeProvider
    .when('/', {
      templateUrl: 'templates/index.html',
      controller: 'indexController',
      controllerAs: 'indexCtrl'
    })
    .when('/pokemons/:id', {
      templateUrl: 'templates/show.html',
      controller: 'showController',
      controllerAs: 'showCtrl'
    })
    .otherwise({
      redirectTo: '/'
    });

  $locationProvider
    .html5Mode({
      enabled: true,
      requireBase: false
    });
}
