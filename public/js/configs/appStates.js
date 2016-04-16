angular.module('TrustingPixels')
.config(['$stateProvider', '$urlRouterProvider', '$locationProvider', function($stateProvider, $urlRouterProvider, $locationProvider) {

  $urlRouterProvider.otherwise('/');

  $stateProvider
    .state('home', {
      url: '/',
      controller: 'homeController',
      templateUrl: 'views/partials/home-partial.html'
    })
    .state('what', {
      url: '/what',
      // controller: 'whatController',
      templateUrl: 'views/partials/whatwedo-partial.html'
    })
    .state('how', {
      url: '/how',
      // controller: 'howController',
      templateUrl: 'views/partials/howwedoit-partial.html'
    })
    .state('why', {
      url: '/why',
      // controller: 'whyController',
      templateUrl: 'views/partials/whywedoit-partial.html'
    })
    .state('contact', {
      url: '/contact',
      // controller: 'contactController',
      templateUrl: 'views/partials/contact-partial.html'
    })
    .state('plunkr', {
      url: '/plunkr',
      // controller: 'contactController',
      templateUrl: 'views/plunkr/index.html'
    })

  $locationProvider.html5Mode(true);
}]);