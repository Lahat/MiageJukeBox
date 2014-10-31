(function () {

	JukeBoxControllers.controller(
		'catalogueMainController',
		['$scope', '$window', function($scope, $window){
			
			$scope.artistes = [];
			$scope.titres = [];
			$scope.genre = [];
			$scope.albums = [];
	}]);


	/*JukeBoxDirectives.directive('playlist', function(){
		return {
			restrict : 'E',
			templateUrl: "directivesTemplates/ma-bibliotheque/playlist.html"
		};
	});*/
})();