(function () {

	JukeBoxControllers.controller(
		'maBibliothequeMainController',
		['$scope', '$window', function($scope, $window){
			


			$scope.playlists = [];

			var generateTestData = function(){
				var morceauId = 0;

				for (var i = 0; i < 5; i++) {
					var playlistDemo = {
						id : i,
						nom : 'Playlist démo '+(i+1),
						//createdAt : new Date(),
						morceaux : []
					};
					
					var nb_morceaux = Math.floor(Math.random() * 20);

					for (var j = 0; j < nb_morceaux; j++) {
						playlistDemo.morceaux.push({
							id : morceauId,
							titre: 'Morceau démo '+morceauId,
							duree: Math.floor(Math.random()*1000),
							artiste: 'Artiste '+ morceauId,
							album : 'Album '+ morceauId
						});
						morceauId++;
					}



					$scope.playlists.push(playlistDemo);
				}
			};

			generateTestData();



			$scope.dureePlaylist = function(playlistID){
				var playlist = _.findWhere($scope.playlists, {id: playlistID});

				var duree = 0;
				if (playlist) {
					for (var i = 0; i < playlist.morceaux.length; i++) {
						duree += playlist.morceaux[i].duree;
					}
				}
				return duree;
			};

			



	}]);









	JukeBoxDirectives.directive('playlist', function(){


        return {
            restrict: 'E',
            templateUrl: "public/directivesTemplates/ma-bibliotheque/playlist.html"
        };

	});

	JukeBoxDirectives.directive('morceau', function(){
        return {
            restrict: 'E',
            templateUrl: "public/directivesTemplates/ma-bibliotheque/morceau.html"
        };
	});
})();