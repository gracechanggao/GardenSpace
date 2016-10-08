angular.module('starter.controllers', [])



 .controller('LoginCtrl', [ '$scope', '$state', function($scope, $state) {
        $scope.signIn = function() {
           $state.go('tab.dash');
           // $state.go('tabs');

        }
    }])



//    .controller('SignInCtrl', function($scope, $state) {
//
//      $scope.signIn = function(user) {
//        console.log('Sign-In', user);
//        $state.go('tabs.home');
//      };
//
//    })


.controller('RegisterCtrl', function($scope, $stateParams, Chats) {

})


.controller('DashCtrl', function($scope) {})


.controller('GardenCtrl', function($scope) {})









//{
// $scope.signIn = function() {
//          $state.go('tab.account');}





.controller('ChatsCtrl', function($scope, Chats) {
  // With the new view caching in Ionic, Controllers are only called
  // when they are recreated or on app start, instead of every page change.
  // To listen for when this page is active (for example, to refresh data),
  // listen for the $ionicView.enter event:
  //
  //$scope.$on('$ionicView.enter', function(e) {
  //});

  $scope.chats = Chats.all();
  $scope.remove = function(chat) {
    Chats.remove(chat);
  };
})

.controller('ChatDetailCtrl', function($scope, $stateParams, Chats) {
  $scope.chat = Chats.get($stateParams.chatId);
})

.controller('AccountCtrl', function($scope) {
  $scope.settings = {
    enableFriends: true
  };
});













//.controller('FlickrCtrl', function($scope, Flickr) {
//
//  var doSearch = ionic.debounce(function(query) {
//    Flickr.search(query).then(function(resp) {
//      $scope.photos = resp;
//    });
//  }, 500);
//
//  $scope.search = function() {
//    doSearch($scope.query);
//  }
//
//})
















//angular.module('starter.controllers', [])
//.controller('LogonCtrl',function($scope,$state){
//
// // $scope.test = function() { $state.go('tab.chats'); }
//
//
//
//$scope.createAccount = function() { $state.go('create-account'); }
//    //  $scope.back = function(){
//       //$ionicBackdrop.retain();
// //$state.go('tab.chats');
//      // $state.go('carousel');
//    //}
//
//
//
//     $scope.test = function() { $state.go('tab.chats'); }
//
//});


















//.controller('CreateAccountCtrl', function($scope) {})

//angular.module('starter.controllers', [])
//.controller('LogonCtrl',function($scope,$state){
//    $scope.back = function(){
//        $state.go('carousel');
//    }
//});


//
//.controller('LoginCtrl', function($scope, $http, $log, $state)
//$scope.state.go('home');
