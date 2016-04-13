angular.module('TrustingPixels')
.config(['$stateProvider', '$urlRouterProvider', '$locationProvider', function($stateProvider, $urlRouterProvider, $locationProvider) {

  $urlRouterProvider.otherwise('/');

  $stateProvider
    .state('home', {
      url: '/',
      controller: 'homeController',
      templateUrl: 'views/partials/home-partial.html'
    })

  $locationProvider.html5Mode(true);
}]);
