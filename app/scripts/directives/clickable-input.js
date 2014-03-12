(function( angular ) {
	'use strict';

	var module = angular.module('directives.ClickableInput', [
	]);

	module.controller('ClickableInputCtrl', function (
		$scope
	) {
		$scope.active = false;
	});

	module.directive('clickableInput', function () {
		return {
			restrict: 'A',
			replace: true,
			transclude: false,
			scope: {
				ngModel: '='
			},
			controller: 'ClickableInputCtrl',
			templateUrl: 'views/clickableInput.html',
			link: function( scope, element, attrs ) {
				console.log(scope.ngModel);
			}
		};
	});

})( angular );
