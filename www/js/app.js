//
//
//
//
//
//
//
//
//
//angular.module('starter', ['ionic', 'starter.controllers', 'starter.services'])
//
//.run(function($ionicPlatform) {
//  $ionicPlatform.ready(function() {
//
//    if (window.cordova && window.cordova.plugins && window.cordova.plugins.Keyboard) {
//        cordova.plugins.Keyboard.hideKeyboardAccessoryBar(true);
//        cordova.plugins.Keyboard.disableScroll(true);
//
//    }
//    if (window.StatusBar) {
//      StatusBar.styleLightContent();
//    }
//  });
//})
//
//.config(function($stateProvider, $urlRouterProvider) {
//
//  $stateProvider
////  .state('login',{
////        url:'/login',
////        templateUrl:'templates/login.html',
////        controller:'LoginCtrl'
////        catch 'false'
//// });
//
//
//
//  .state('tab', {
//    url: '/tab',
//    abstract: true,
//    templateUrl: 'templates/tabs.html'
//  })
//
//
//  .state('tab.dash', {
//    url: '/dash',
//    views: {
//      'tab-dash': {
//        templateUrl: 'templates/tab-dash.html',
//        controller: 'DashCtrl'
//      }
//    }
//  })
//
//  .state('tab.garden', {
//      url: '/garden',
//      views: {
//        'tab-garden': {
//          templateUrl: 'templates/tab-garden.html',
//          controller: 'GardenCtrl'
//        }
//      }
//    })
//
//
//
//
//  .state('tab.account', {
//    url: '/account',
//    views: {
//      'tab-account': {
//        templateUrl: 'templates/tab-account.html',
//        controller: 'AccountCtrl'
//      }
//    }
//  });
//
//
//  // if none of the above states are matched, use this as the fallback
//  $urlRouterProvider.otherwise('/tab/dash');
//
//});
//
//
//
//
//








angular.module('starter', ['ionic', 'starter.controllers', 'starter.services'])

.run(function($ionicPlatform) {
  $ionicPlatform.ready(function() {

    if (window.cordova && window.cordova.plugins && window.cordova.plugins.Keyboard) {
        cordova.plugins.Keyboard.hideKeyboardAccessoryBar(true);
        cordova.plugins.Keyboard.disableScroll(true);

    }
    if (window.StatusBar) {
      StatusBar.styleLightContent();
    }
  });
})

.config(function($stateProvider, $urlRouterProvider) {


  $stateProvider
//      .state('login',{
//            url:'/login',
//            templateUrl:'templates/login.html',
//            controller:'LoginCtrl'
//     });




      .state('tab', {
        url: '/tab',
        abstract: true,
        templateUrl: 'templates/tabs.html'
      })


      .state('tab.dash', {
        url: '/dash',
        views: {
          'tab-dash': {
            templateUrl: 'templates/tab-dash.html',
            controller: 'DashCtrl'
          }
        }
      })

      .state('tab.garden', {
          url: '/garden',
          views: {
            'tab-garden': {
              templateUrl: 'templates/tab-garden.html',
              controller: 'GardenCtrl'
            }
          }
        })




      .state('tab.account', {
        url: '/account',
        views: {
          'tab-account': {
            templateUrl: 'templates/tab-account.html',
            controller: 'AccountCtrl'
          }
        }
      });


      // if none of the above states are matched, use this as the fallback
      $urlRouterProvider.otherwise('/tab/dash');

});











































//
//
// .state('verify', {
//
//      url: '/verify',
//      abstract: true,
//      templateUrl: 'templates/verify.html'
//
//      }
//
//    })
//
//    //登录界面
//
//    .state('verify.login', {
//
//      url: '/login',
//
//      views:{
//
//        'login':{
//
//            templateUrl: "login.html",
//
//            controller:'LoginCtrl'
//
//        }
//
//      }
//
//    })
//
//
//
//    .state('verify.register', {
//
//      url: '/register',
//
//      views:{
//
//        'register':{
//
//            templateUrl: "register.html",
//
//            controller:"RegisterCtrl"
//
//        }
//
//      }
//
//    })
//
//  $urlRouterProvider.otherwise('/login');
//
//
//
//});
