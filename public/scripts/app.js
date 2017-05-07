angular.module('isItReal', ['ngRoute'])
       .config(config);

////////////
// ROUTES //
////////////

config.$inject = ['$routeProvider', '$locationProvider'];
function config (  $routeProvider,   $locationProvider  )  {
  $routeProvider
    .when('/', {
      templateUrl: '/templates/home',
      controller: 'homeController',
      controllerAs: 'homeCtrl'
    })
    .when('/animals', {
      templateUrl: '/templates/class',
      controller: 'classController',
      controllerAs: 'classCtrl'
    })
    .when('/animals/profile/:id', {
      templateUrl: '/templates/profile',
      controller: 'profileController',
      controllerAs: 'profileCtrl'
    })
    .when('/animals/class/:type', {
      templateUrl: '/templates/animals',
      controller: 'animalsController',
      controllerAs: 'animalsCtrl'
    })

  $locationProvider
    .html5Mode({
      enabled: true,
      requireBase: false
    });
}
