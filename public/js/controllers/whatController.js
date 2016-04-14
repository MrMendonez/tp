angular.module('TrustingPixels')
.config(['$stateProvider', '$urlRouterProvider', '$locationProvider', function($stateProvider, $urlRouterProvider, $locationProvider) {

  // $scope.whatWeDoBackground = function() {
  //   // console.log('whatWeDoBackground function fired');
  //   // $('body').css("background-image", "url(../img/whatwedo-background.png)");
  // }

  $locationProvider.html5Mode(true);
}]);
