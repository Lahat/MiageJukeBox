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
                templateUrl: 'public/templates/ma-bibliotheque.ng-view.html',
                controller: 'MaBibliothequeMainController'
            }).when('/catalogue', {
                templateUrl: 'public/templates/catalogue.ng-view.html',
                controller: 'CatalogueMainController'
            }).otherwise({
                redirectTo: '/my'
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
            var currentPlayList = [];
            var lastAction = IJukeBoxBridgeLastAction.NONE;

            var bridge = {
                getCurrentPlaylist: function () {
                    return currentPlayList;
                },
                enQueue: function (track) {
                    currentPlayList.push(track);
                    lastAction = IJukeBoxBridgeLastAction.QUEUED;
                },
                play: function (track) {
                    currentPlayList.unshift(track);
                    lastAction = IJukeBoxBridgeLastAction.PLAYED;
                },
                getLastAction: function () {
                    return lastAction;
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
