/*(1) Initializing angular - myApp shoud be added 
in the HTML as ng-app = 'myApp'
We are adding dependencies in the array [ngMessages, ...]*/
var myApp = angular.module('myApp', [ ]);

/*(2) Declaring a controller
We do Dependency injection inside the function($scope, ....)*/
myApp.controller('mainController', ['$scope', '$timeout', '$filter',  function($scope, $timeout, $filter) {

	/*Setting var name*/
	$scope.name = 'Diego';

	/*Changing name after a period of time (3000ms)*/
	$timeout(function() {

		$scope.name = 'Everybody';

	}, 3000);


	/*Two way data binding
	Model change view and view change model. */
	$scope.handle = '';

	$scope.lowercasehandle = function() {
		return $filter('lowercase')($scope.handle);
	};

	/*Digest loop*/

	$scope.$watch('handle', function(newValue, oldValue){

		console.info('Changed!');
		console.log('Old: '+ oldValue);
		console.log('New: '+ newValue);

	})



}]);