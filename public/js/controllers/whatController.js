angular.module('TrustingPixels')
.config(['$stateProvider', '$urlRouterProvider', '$locationProvider', function($stateProvider, $urlRouterProvider, $locationProvider) {

  $state.go($state.current, {}, {reload: true});

  $locationProvider.html5Mode(true);
}]);
