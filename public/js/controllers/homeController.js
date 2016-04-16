angular.module('TrustingPixels')
.config(['$stateProvider', '$urlRouterProvider', '$locationProvider', function($stateProvider, $urlRouterProvider, $locationProvider) {


  console.log('homeController fired');
  $scope.navbarPartial = '/views/partials/navbar-partial.html';
  console.log(navbarPartial);

  $locationProvider.html5Mode(true);
}]);
