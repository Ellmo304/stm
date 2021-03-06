angular.module('stmApp', ['ngResource', 'ui.router'])
.filter('trusted', ['$sce', function ($sce) {
    return function(url) {
        return $sce.trustAsResourceUrl(url);
    };
}])
.config(Router);



Router.$inject = ['$stateProvider', '$urlRouterProvider'];

  //
  // Now set up the states
function Router($stateProvider, $urlRouterProvider) {
  $stateProvider
    .state('landing', {
      url: '/',
      templateUrl: '/templates/landingPage.html',
      controller: 'LandingController as landing'
    })
    .state('home', {
      url: '/home',
      templateUrl: '/templates/homePage.html',
      controller: 'HomeController as home'
    })
    .state('music', {
      url: '/music',
      templateUrl: '/templates/musicPage.html',
      controller: 'MusicController as music'
    })
    .state('video', {
      url: '/video',
      templateUrl: '/templates/videoPage.html',
      controller: 'VideoController as video'
    })
    .state('gallery', {
      url: '/gallery',
      templateUrl: '/templates/galleryPage.html',
      controller: 'GalleryController as gallery'
    })
    .state('gigs', {
      url: '/gigs',
      templateUrl: '/templates/gigPage.html',
      controller: 'GigsController as gigs'
    });

//
// For any unmatched url, redirect to /home
  $urlRouterProvider.otherwise('/');


}
