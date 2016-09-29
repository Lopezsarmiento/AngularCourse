/*(1) Initializing angular - myApp shoud be added 
in the HTML as ng-app = 'myApp'
We are adding dependencies in the array [ngMessages, ...]*/
var myApp = angular.module('myApp', ['ngMessages', 'ngResource']);

/*(2) Declaring a controller
We do Dependency injection inside the function($scope, ....)*/
myApp.controller('mainController', function($scope, $log, $filter){

	/* --Dependency Injection--*/
	$scope.name = 'Diego';
	$scope.formattedname = $filter('uppercase')($scope.name);

	$log.info($scope.name);
	$log.info($scope.formattedname);

	$log.log("Hello.");
	$log.info("This is some information!");
	$log.warn("Warning!");
	$log.debug("Some debugging info!!");
	$log.error("This was an error!");

});

/* --Dependency Injection and minification--*/
/*myApp.controller("mainController",["$scope","$log",function(a,b){b.info(a)}]);*/
	