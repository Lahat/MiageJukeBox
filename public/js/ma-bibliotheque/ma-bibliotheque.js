(function () {

	JukeBoxControllers.controller(
		'maBibliothequeMainController',
		['$scope', '$window', function($scope, $window){
			


			$scope.playlists = [];

			for (var i = 0; i < 5; i++) {
				var playlistDemo = {
					id : i,
					nom : 'Playlist démo',
					createdAt : new Date(),
					morceaux : []
				};
				
				$scope.playlists.push(playlistDemo);
			};

			



	}]);









	JukeBoxDirectives.directive('playlist', function(){
		return {
			restrict : 'E',
			templateUrl: "directivesTemplates/ma-bibliotheque/playlist.html"
		};
	});
})();