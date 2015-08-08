angular.module('eCommerce',['angular-meteor','ui.router','ngMaterial'])
.controller('AppCtrl',['$scope','$mdSidenav','$mdUtil',function($scope, $mdSidenav,$mdUtil){
	$scope.toggleLeft = buildToggler('left');
    $scope.toggleRight = buildToggler('right');
    /**
     * Build handler to open/close a SideNav; when animation finishes
     * report completion in console
     */
    function buildToggler(navID) {
      var debounceFn = $mdUtil.debounce(function(){
            $mdSidenav(navID).toggle();
          },100);
      return debounceFn;
    }
}])
.controller('LeftCtrl',['$scope','$mdSidenav','$mdUtil',function($scope, $mdSidenav,$mdUtil){
	$scope.close = function () {
      $mdSidenav('left').close();
    };
}])
.controller('RightCtrl',['$scope','$mdSidenav','$mdUtil',function($scope, $mdSidenav,$mdUtil){
	$scope.close = function () {
      $mdSidenav('right').close();
    };
}])

function onReady() {
  angular.bootstrap(document, ['socially']);
}

if (Meteor.isCordova)
  angular.element(document).on("deviceready", onReady);
else
  angular.element(document).ready(onReady);

