var simpleApp = angular.module('simpleApp', []);

simpleApp.controller('simpleCtrl', function($scope, $interval) {

	$scope.counter = 0;

	$interval(function(){
		$scope.counter++
	}, 1000, 0)

});
