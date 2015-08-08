angular.module('eCommerce').controller('HomeCtrl',['$scope','$meteor',function($scope,$meteor){
	$scope.inventory = $meteor.collection(Inventory).subscribe('inventory');
}])