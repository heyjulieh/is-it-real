angular.module('isItReal', ['ngRoute'])
       .config(config);

////////////
// ROUTES //
////////////

config.$inject = ['$routeProvider', '$locationProvider'];
function config (  $routeProvider,   $locationProvider  )  {
  $routeProvider
    .when('/', {
      templateUrl: 'templates/home',
      controller: 'homeController',
      controllerAs: 'homeCtrl'
    })
    .when('/animals', {
      templateUrl: 'templates/animals',
      controller: 'animalsController',
      controllerAs: 'animalsCtrl'
    })
    .when('/animals/:id', {
      templateUrl: 'templates/animalsprofile',
      controller: 'profileController',
      controllerAs: 'profileCtrl'
    })

  $locationProvider
    .html5Mode({
      enabled: true,
      requireBase: false
    });
}
