angular.module('TrustingPixels')
.config(['$stateProvider', '$urlRouterProvider', '$locationProvider', function($stateProvider, $urlRouterProvider, $locationProvider) {

  $urlRouterProvider.otherwise('/');

  $stateProvider
    .state('home', {
      url: '/',
      // controller: 'homeController',
      templateUrl: 'views/partials/home-partial.html'
    })
    .state('what', {
      url: '/what',
      // controller: 'whatController',
      templateUrl: 'views/partials/what-partial.html'
    })
    .state('regulations', {
      url: '/what/regulations',
      // controller: 'whatController',
      templateUrl: 'views/partials/regulations-partial.html'
    })
    .state('how', {
      url: '/how',
      // controller: 'howController',
      templateUrl: 'views/partials/how-partial.html'
    })
    .state('why', {
      url: '/why',
      // controller: 'whyController',
      templateUrl: 'views/partials/why-partial.html'
    })
    .state('contact', {
      url: '/contact',
      // controller: 'contactController',
      templateUrl: 'views/partials/contact-partial.html'
    })
    

  $locationProvider.html5Mode(true);
}]);