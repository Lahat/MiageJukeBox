/// <reference path="./headers/Data.d.ts"/>
declare var window : Window;
(function () {
	var JukeBox = angular.module('JukeBox', ['ngRoute', 'ngAnimate']);
    window.JukeBox = JukeBox;


	JukeBox.config(['$interpolateProvider', function($interpolateProvider){
		$interpolateProvider
			.startSymbol('[[')
			.endSymbol(']]');
	}]);

	JukeBox.config ([ '$routeProvider', function($routeProvider){
		$routeProvider
			.when ('/my',{ 
					templateUrl: 'public/templates/my.ng-view.html',
					controller: 'MaBibliothequeController'
				}
			)
			.when ('/all',{
					templateUrl: 'public/templates/all.ng-view.html',
					controller: 'AllController'
				}
			)
            .when ('/artists',{
                templateUrl: 'public/templates/artists.ng-view.html',
                controller: 'ArtistsController'
            }
        )
			.otherwise({
				redirectTo: '/all'
			});
		}]);

    JukeBox.directive('playBar', function(){
       return {
          restrict : 'E',
          templateUrl: "public/directivesTemplates/playbar/playbar.html"
       } ;
    });
    JukeBox.directive('playableTrack', function(){
        return {
            restrict : 'E',
            templateUrl: "public/directivesTemplates/playbar/playableTrack.html"
        };
    });



    JukeBox.factory('JukeBoxBridge', ['$rootScope', function($rootScope){

        var tracks: Array<IJoinedTrack>;
        var currentPlayList : Array<IJoinedTrack> = [];
        var lastAction : IJukeBoxBridgeLastAction = IJukeBoxBridgeLastAction.NONE;

        var currentArtist : IJoindedArtist = null;

        var bridge : IJukeBoxBridge = {
            getCurrentPlaylist : function():Array<IJoinedTrack>{
                return currentPlayList;
            },
            enQueue : function(track: IJoinedTrack):void{
                currentPlayList.push(track);
                lastAction = IJukeBoxBridgeLastAction.QUEUED;
            },
            play : function(track: IJoinedTrack):void{
                currentPlayList.unshift(track);
                lastAction = IJukeBoxBridgeLastAction.PLAYED;
            },
            getLastAction : function() : IJukeBoxBridgeLastAction{
                return lastAction;
            },
            showArtistInfo: function(artist: IJoindedArtist):void{
                currentArtist = artist;
            },
            getCurrentArtist: function(): IJoindedArtist{
                return currentArtist;
            }
        };
        return bridge;

    }]);

})();
enum IJukeBoxBridgeLastAction{
    PLAYED,
    QUEUED,
    NONE
}