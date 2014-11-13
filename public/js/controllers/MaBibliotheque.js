/**
* Created by Geoffrey on 08/11/2014.
*/
/// <reference path="../headers/JukeBox.d.ts" />
/// <reference path="../headers/Data.d.ts" />

var MaBibliothequeController = (function () {
    // construct
    function MaBibliothequeController($scope, JukeBoxBridge) {
        var _this = this;
        this.artistModalId = "#artist-modal";
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
            _this.forceRefresh();
        });
    }
    MaBibliothequeController.prototype.getPlaylists = function () {
        return this.playlists;
    };

    MaBibliothequeController.prototype.artistInfo = function (track) {
        this.JukeBoxBridge.showArtistInfo(track.artist);
        $(this.artistModalId).modal('show');
    };

    MaBibliothequeController.prototype.play = function (track) {
        this.JukeBoxBridge.play(track);
    };

    MaBibliothequeController.prototype.enQueue = function (track) {
        this.JukeBoxBridge.enQueue(track);
    };

    MaBibliothequeController.prototype.forceRefresh = function () {
        if (!this.$scope.$$phase)
            this.$scope.$apply();
    };
    return MaBibliothequeController;
})();

window.JukeBox.controller('MaBibliothequeController', [
    '$scope', 'JukeBoxBridge', function ($scope, JukeBoxBridge) {
        $scope.vm = new MaBibliothequeController($scope, JukeBoxBridge);
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
