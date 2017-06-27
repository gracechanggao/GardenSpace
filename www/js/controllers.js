

//angular.module("app", ["chart.js"]).controller("LineCtrl", function ($scope) {
//
//  $scope.labels = ["January", "February", "March", "April", "May", "June", "July"];
//  $scope.series = ['Series A', 'Series B'];
//  $scope.data = [
//    [65, 59, 80, 81, 56, 55, 40],
//    [28, 48, 40, 19, 86, 27, 90]
//  ];
//  $scope.onClick = function (points, evt) {
//    console.log(points, evt);
//  };
//  $scope.datasetOverride = [{ yAxisID: 'y-axis-1' }, { yAxisID: 'y-axis-2' }];
//  $scope.options = {
//    scales: {
//      yAxes: [
//        {
//          id: 'y-axis-1',
//          type: 'linear',
//          display: true,
//          position: 'left'
//        },
//        {
//          id: 'y-axis-2',
//          type: 'linear',
//          display: true,
//          position: 'right'
//        }
//      ]
//    }
//  };
//});



angular.module('starter.controllers', [])



 .controller('LoginCtrl', [ '$scope', '$state', function($scope, $state, $http) {

        $scope.signIn = function() {
           $state.go('tab.dash');
//           $state.go('tabs');

        }
//        console.log("hello");
//        var data = {
//          "gardenspace_id": 1,
//            "user_user_id": 1
//        }
//        $http.post("http://52.65.30.143:9000/getdata",data).then(function success(response){
//          console.log(response.data);
//        }. function error(response) {
//          console.warn(response);
//        });
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



.controller('P1Ctrl', function($scope) {

        $scope.backDash = function() {
           $state.go('tab.dash');


        }

})

.controller('DashCtrl', function($http, $scope) {

        var data = {
          "gardenspace_id": 1,
            "user_user_id": 1
        }
        $http.post("http://52.65.30.143:9000/getdata",data).then(function success(response){
          console.log(response.data);
        }, function error(response) {
          console.warn(response);
        });


})


.controller('GardenCtrl', function($scope) {})



//.controller('PlantsCtrl', function($scope, Plants, $http) {
//$scope.data
//$scope.hum
//$scope.moist1
//$scope.moist2
//$scope.light
//$scope.moist
//
//
//
//          var data = {
//            "gardenspace_id": 1,
//              "user_user_id": 1
//          }
//          $http.post("http://52.65.30.143:9000/getdata",data).then(function success(response){
//          $scope.plant_data = response.data;
//
//            $scope.data = [response.data[0].temp];
//            $scope.hum = [response.data[0].hum];
//            $scope.moist=[[response.data[0].moist1],[response.data[0].moist2]];
//            $scope.moist1 = [response.data[0].moist1];
//            $scope.moist2 = [response.data[0].moist2];
//            $scope.light = [response.data[0].light];
//
//            console.log(response.data);
//          }, function error(response) {
//            console.warn(response);
//          });
//  $scope.seriesmoist = ['Series A', 'Series B'];
//  $scope.labels = ["Temperature"];
//  $scope.labelshum = ["Humidity"];
//  $scope.labelsmoist1 = ["Moisture1"];
//  $scope.labelsmoist2 = ["Moisture2"];
//    $scope.labelsmoist = ["Moisture"];
//  $scope.labelslight = ["Light"];


.controller('PlantsCtrl', function($scope, Plants, $http) {

//.controller('PlantsCtrl', function($scope, Plants, $http, $filter, $ionicPopup, $ionicSlideBoxDelegate, d3Gauge) {
$scope.data
$scope.hum
$scope.moist1
$scope.moist2
$scope.light
$scope.moist



          var data = {
            "gardenspace_id": 1,
              "user_user_id": 1
          }
          $http.post("http://52.65.30.143:9000/getdata",data).then(function success(response){
          $scope.plant_data = response.data;

            $scope.data = [response.data[0].temp];
            $scope.hum = [response.data[0].hum];
            $scope.moist=[[response.data[0].moist1],[response.data[0].moist2]];
            $scope.moist1 = [response.data[0].moist1];
            $scope.moist2 = [response.data[0].moist2];
            $scope.light = [response.data[0].light];

            console.log(response.data);
          }, function error(response) {
            console.warn(response);
          });
  $scope.seriesmoist = ['Series A', 'Series B'];
  $scope.labels = ["Temperature"];
  $scope.labelshum = ["Humidity"];
  $scope.labelsmoist1 = ["Moisture1"];
  $scope.labelsmoist2 = ["Moisture2"];
    $scope.labelsmoist = ["Moisture"];
  $scope.labelslight = ["Light"];


//
//
//   $scope.stats = {
//     summary: 1355,
//     uploaded: 552,
//     collected: 357,
//     smuploaded: 150
//  };
//
//  $scope.slideChanged = function(index) {
//    $scope.slideIndex = index;
//  };
//
//  var config4 = d3Gauge.liquidFillGaugeDefaultSettings();
//  config4.circleThickness = 0.1;
//  config4.circleColor = "rgba(255, 255, 255, 0.3)";
//  config4.textColor = "#fff";
//  config4.waveTextColor = "#fff";
//  config4.waveColor = "rgba(0, 150, 210, 0.5)";
//  config4.textVertPosition = 0.5;
//  config4.waveAnimateTime = 1000;
//  config4.waveHeight = 0.05;
//  config4.waveAnimate = true;
//  config4.waveRise = false;
//  config4.waveHeightScaling = false;
//  config4.waveOffset = 0.25;
//  config4.textSize = 1;
//  config4.waveCount = 2;
//  d3Gauge.loadLiquidFillGauge("fillgauge1", 75, config4);
//  d3Gauge.loadLiquidFillGauge("fillgauge2", ($scope.stats.uploaded/$scope.stats.summary)*100, config4);
//  d3Gauge.loadLiquidFillGauge("fillgauge5", ($scope.stats.collected/$scope.stats.summary)*100, config4);
//  d3Gauge.loadLiquidFillGauge("fillgauge6", ($scope.stats.smuploaded/$scope.stats.collected)*100, config4);
//






//  $scope.plants = Plants.all();
//  $scope.remove = function(plant) {
//    Plants.remove(plant);
//  $scope.plant = Plants.get($stateParams.plantId);
//  };


//
//          var data = {
//            "gardenspace_id": 1,
//              "user_user_id": 1
//          }
//          $http.post("http://52.65.30.143:9000/getdata",data).then(function success(response){
//          $scope.plant_data = response.data;
//            console.log(response.data);
//          }, function error(response) {
//            console.warn(response);
//          });








})

.controller('PlantsDetailCtrl', function($scope, $stateParams, Plants) {
  $scope.plant = Plants.get($stateParams.plantId);

})




//.controller('ContentController', function ($scope, $ionicSideMenuDelegate) {
//          $scope.toggleLeft = function() {
//            $ionicSideMenuDelegate.toggleLeft();};
//                                 })









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
