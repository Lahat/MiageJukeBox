/// <reference path="./headers/Data.d.ts"/>
(function () {
    var JukeBox = angular.module('JukeBox', ['ngRoute', 'ngAnimate']);
    window.JukeBox = JukeBox;

    JukeBox.config([
        '$interpolateProvider', function ($interpolateProvider) {
            $interpolateProvider.startSymbol('[[').endSymbol(']]');
        }]);

    JukeBox.config([
        '$routeProvider', function ($routeProvider) {
            $routeProvider.when('/my', {
                templateUrl: 'public/templates/my.ng-view.html',
                controller: 'MaBibliothequeController'
            }).when('/all', {
                templateUrl: 'public/templates/all.ng-view.html',
                controller: 'AllController'
            }).otherwise({
                redirectTo: '/all'
            });
        }]);

    JukeBox.directive('playBar', function () {
        return {
            restrict: 'E',
            templateUrl: "public/directivesTemplates/playbar/playbar.html"
        };
    });
    JukeBox.directive('playableTrack', function () {
        return {
            restrict: 'E',
            templateUrl: "public/directivesTemplates/playbar/playableTrack.html"
        };
    });

    JukeBox.factory('JukeBoxBridge', [
        '$rootScope', function ($rootScope) {
            var tracks;
            var currentPlayList = [];
            var lastAction = 2 /* NONE */;

            var currentArtist = null;

            var bridge = {
                getCurrentPlaylist: function () {
                    return currentPlayList;
                },
                enQueue: function (track) {
                    currentPlayList.push(track);
                    lastAction = 1 /* QUEUED */;
                },
                play: function (track) {
                    currentPlayList.unshift(track);
                    lastAction = 0 /* PLAYED */;
                },
                getLastAction: function () {
                    return lastAction;
                },
                showArtistInfo: function (artist) {
                    currentArtist = artist;
                },
                getCurrentArtist: function () {
                    return currentArtist;
                }
            };
            return bridge;
        }]);
})();
var IJukeBoxBridgeLastAction;
(function (IJukeBoxBridgeLastAction) {
    IJukeBoxBridgeLastAction[IJukeBoxBridgeLastAction["PLAYED"] = 0] = "PLAYED";
    IJukeBoxBridgeLastAction[IJukeBoxBridgeLastAction["QUEUED"] = 1] = "QUEUED";
    IJukeBoxBridgeLastAction[IJukeBoxBridgeLastAction["NONE"] = 2] = "NONE";
})(IJukeBoxBridgeLastAction || (IJukeBoxBridgeLastAction = {}));
//# sourceMappingURL=JukeBox.js.map
