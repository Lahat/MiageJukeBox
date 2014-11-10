/**
* Created by Geoffrey on 08/11/2014.
*/
/// <reference path="../headers/JukeBox.d.ts" />
/// <reference path="../headers/Data.d.ts" />

var MaBibliotheque;
(function (MaBibliotheque) {
    var MaBibliothequeMainController = (function () {
        // construct
        function MaBibliothequeMainController($scope, JukeBoxBridge) {
            var _this = this;
            this.$scope = $scope;

            this.JukeBoxBridge = JukeBoxBridge;
            this.playlists = new Array();

            this.model = new DatabaseEmulator();

            this.model.getTracks(function (tracks) {
                _this.tracks = _.indexBy(tracks, function (track) {
                    return track.track_id;
                });

                var playlistDemo = {
                    id: 1,
                    name: "Playlist demo",
                    morceaux: tracks
                };

                _this.playlists.push(playlistDemo);
                _this.$scope.$apply();
            });
        }
        MaBibliothequeMainController.prototype.getPlaylists = function () {
            return this.playlists;
        };

        MaBibliothequeMainController.prototype.play = function (track_id) {
            var track = this.tracks[track_id];

            //console.log("Lecture de "+track.artist.name + " : " + track.title);
            this.JukeBoxBridge.play(track);
        };

        MaBibliothequeMainController.prototype.enQueue = function (track_id) {
            var track = this.tracks[track_id];
            this.JukeBoxBridge.enQueue(track);
        };
        return MaBibliothequeMainController;
    })();
    MaBibliotheque.MaBibliothequeMainController = MaBibliothequeMainController;
})(MaBibliotheque || (MaBibliotheque = {}));

window.JukeBox.controller('MaBibliothequeMainController', [
    '$scope', 'JukeBoxBridge', function ($scope, JukeBoxBridge) {
        $scope.vm = new MaBibliotheque.MaBibliothequeMainController($scope, JukeBoxBridge);
    }]);

window.JukeBox.directive('playlist', function () {
    return {
        restrict: 'E',
        templateUrl: "public/directivesTemplates/ma-bibliotheque/playlist.html"
    };
});

window.JukeBox.directive('morceau', function () {
    return {
        restrict: 'E',
        templateUrl: "public/directivesTemplates/ma-bibliotheque/morceau.html"
    };
});
//# sourceMappingURL=MaBibliotheque.js.map
