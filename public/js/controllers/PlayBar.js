/**
* Created by Geoffrey on 10/11/2014.
*/
/// <reference path="../headers/Data.d.ts" />
var IJukeBoxBridgeLastAction;
(function (IJukeBoxBridgeLastAction) {
    IJukeBoxBridgeLastAction[IJukeBoxBridgeLastAction["PLAYED"] = 0] = "PLAYED";
    IJukeBoxBridgeLastAction[IJukeBoxBridgeLastAction["QUEUED"] = 1] = "QUEUED";
    IJukeBoxBridgeLastAction[IJukeBoxBridgeLastAction["NONE"] = 2] = "NONE";
})(IJukeBoxBridgeLastAction || (IJukeBoxBridgeLastAction = {}));
var PlayBar = (function () {
    function PlayBar($scope, $rootScope, JukeBoxBridge) {
        var _this = this;
        this.$scope = $scope;
        this.JukeBoxBridge = JukeBoxBridge;
        this.$scope.$watchCollection('vm.currentPlaylist', function (track) {
            var action = _this.JukeBoxBridge.getLastAction();
            if (action === 0 /* PLAYED */) {
                _this.reIndexTracks();
                _this.playTrack(track[0]);
            } else if (action === 1 /* QUEUED */) {
                console.log("Queued: " + track[0].title);
                _this.reIndexTracks();
            }
        });
    }
    PlayBar.prototype.reIndexTracks = function () {
        if (this.currentPlaylist) {
            _.each(this.currentPlaylist, function (track, index) {
                track.position = index;
            });
        }
    };

    PlayBar.prototype.getCurrentPlaylist = function () {
        this.currentPlaylist = this.JukeBoxBridge.getCurrentPlaylist();
        return this.currentPlaylist;
    };

    PlayBar.prototype.playTrack = function (track) {
        if (this.currentlyPlaying) {
            this.currentlyPlaying.pause();
        }
        console.log("Playing: " + track.title);
        this.currentlyPlaying = new Audio(track.mp3_url);
        this.currentlyPlayingTrack = track;
        this.currentlyPlaying.play();
    };

    PlayBar.prototype.isPlaying = function () {
        var isPlaying = false;
        if (this.currentlyPlaying) {
            isPlaying = !this.currentlyPlaying.paused;
        }
        return isPlaying;
    };

    PlayBar.prototype.playPause = function () {
        if (this.isPlaying()) {
            this.currentlyPlaying.pause();
        } else {
            this.currentlyPlaying.play();
        }
    };

    PlayBar.prototype.playAlreadyQueuedTrack = function (track) {
        this.playTrack(track);
    };

    PlayBar.prototype.playNext = function () {
        if (this.hasNext()) {
            var index = this.currentlyPlayingTrack.position;
            var next = this.currentPlaylist[index + 1];
            if (next) {
                this.playTrack(next);
            }
        }
    };

    PlayBar.prototype.playPrevious = function () {
        if (this.hasPrevious()) {
            var index = this.currentlyPlayingTrack.position;
            var next = this.currentPlaylist[index - 1];
            if (next) {
                this.playTrack(next);
            }
        }
    };

    PlayBar.prototype.getCurrentlyPlaying = function () {
        return this.currentlyPlayingTrack;
    };

    PlayBar.prototype.hasNext = function () {
        var ret = false;
        if (this.currentlyPlayingTrack) {
            var index = this.currentlyPlayingTrack.position;
            ret = (index < this.currentPlaylist.length - 1);
        }
        return ret;
    };
    PlayBar.prototype.hasPrevious = function () {
        var ret = false;
        if (this.currentlyPlayingTrack) {
            var index = this.currentlyPlayingTrack.position;
            ret = (index > 0);
        }
        return ret;
    };
    return PlayBar;
})();

window.JukeBox.controller('PlayBar', [
    '$scope', '$rootScope', 'JukeBoxBridge', function ($scope, $rootScope, JukeBoxBridge) {
        $scope.vm = new PlayBar($scope, $rootScope, JukeBoxBridge);
    }]);
//# sourceMappingURL=PlayBar.js.map
