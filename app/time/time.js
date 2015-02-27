var app = angular.module('leApp');

app.directive('theTime', function(){ // the-time in html is theTime in javascript directive (it autoplaces a hiphen in it)
	return {
		restrict: 'E',
		template: 'The Time is: {{time}}',// {{time | date: "medium"}} with Date.now() (this is the angular specific syntax)
		link: function($scope, element, attrs) {
			var currentTime = new Date(); //Date.now()
			$scope.time = currentTime.toDateString();
		}
	}

})