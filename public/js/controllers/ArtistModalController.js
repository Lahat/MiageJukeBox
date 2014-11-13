/**
* Created by Geoffrey on 13/11/2014.
*/
/// <reference path="../headers/Data.d.ts" />
var ArtistModalController = (function () {
    // Constructeur
    function ArtistModalController($scope, JukeBoxBride) {
        this.str = "Yolo";
        this.$scope = $scope;
        this.JukeBoxBridge = JukeBoxBride;
    }
    ArtistModalController.prototype.getArtist = function () {
        return this.JukeBoxBridge.getCurrentArtist();
    };

    ArtistModalController.prototype.play = function (track) {
        this.JukeBoxBridge.play(track);
    };

    ArtistModalController.prototype.enQueue = function (track) {
        this.JukeBoxBridge.enQueue(track);
    };
    return ArtistModalController;
})();

window.JukeBox.controller('ArtistModalController', [
    '$scope', 'JukeBoxBridge', function ($scope, JukeBoxBridge) {
        $scope.vm = new ArtistModalController($scope, JukeBoxBridge);
    }]);
//# sourceMappingURL=ArtistModalController.js.map
