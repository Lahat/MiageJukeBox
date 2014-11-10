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
					templateUrl: 'public/templates/ma-bibliotheque.ng-view.html',
					controller: 'MaBibliothequeMainController'
				}
			)
			.when ('/catalogue',{ 
					templateUrl: 'public/templates/catalogue.ng-view.html',
					controller: 'CatalogueMainController'
				}
			)
			.otherwise({
				redirectTo: '/my'
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

        var currentPlayList : Array<IJoinedTrack> = [];
        var lastAction : IJukeBoxBridgeLastAction = IJukeBoxBridgeLastAction.NONE;

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