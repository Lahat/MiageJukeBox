/**
* Created by Geoffrey on 09/11/2014.
*/
/// <reference path="../headers/Data.d.ts"/>

var DatabaseEmulator = (function () {
    function DatabaseEmulator() {
        this.model = new DataModel();
    }
    DatabaseEmulator.prototype.getTracks = function (callback) {
        var _this = this;
        var inCache = window.sessionStorage.getItem('tracks') !== null;

        var next = function (tracks) {
            _this.getArtists(function (artists) {
                var artistsGrouped;
                artistsGrouped = _.indexBy(artists, function (artiste) {
                    return artiste.artist_id;
                });

                _.each(tracks, function (track) {
                    track.artist = artistsGrouped[track.artist_id];
                });

                callback(tracks);
            });
        };

        if (!inCache) {
            this.model.getTracks(function (tracks) {
                window.sessionStorage.setItem('tracks', JSON.stringify(tracks));
                next(tracks);
            });
        } else {
            var tracks = JSON.parse(window.sessionStorage.getItem('tracks'));
            next(tracks);
        }
    };

    DatabaseEmulator.prototype.getArtists = function (callback) {
        var inCache = window.sessionStorage.getItem('artists') !== null;

        var artists;

        if (!inCache) {
            this.model.getArtists(function (artists) {
                window.sessionStorage.setItem('artists', JSON.stringify(artists));
                callback(artists);
            });
        } else {
            artists = JSON.parse(window.sessionStorage.getItem('artists'));
            callback(artists);
        }
    };
    return DatabaseEmulator;
})();
//# sourceMappingURL=DatabaseEmulator.js.map
