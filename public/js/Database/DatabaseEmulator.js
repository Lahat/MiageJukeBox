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
            _this.model.getArtists(function (artists) {
                var artistsGrouped;
                artistsGrouped = _.indexBy(artists, function (artiste) {
                    return artiste.artist_id;
                });

                var groupedTracks;
                groupedTracks = _.groupBy(tracks, function (track) {
                    return track.artist_id;
                });

                _.each(tracks, function (track) {
                    track.artist = artistsGrouped[track.artist_id];
                    track.artist.morceaux = [];
                    _.each(groupedTracks[track.artist.artist_id], function (trackToCopy) {
                        var copy = _.clone(trackToCopy);
                        copy.artist = null;
                        track.artist.morceaux.push(copy);
                    });
                });

                window.sessionStorage.setItem('tracks', JSON.stringify(tracks));
                callback(tracks);
            });
        };

        if (!inCache) {
            this.model.getTracks(function (tracks) {
                next(tracks);
            });
        } else {
            var tracks = JSON.parse(window.sessionStorage.getItem('tracks'));
            next(tracks);
        }
    };

    DatabaseEmulator.prototype.getArtists = function (callback) {
        var _this = this;
        var inCache = window.sessionStorage.getItem('artists') !== null;

        var artists;

        var next = function (artists) {
            _this.model.getTracks(function (tracks) {
                var groupedTracks;
                groupedTracks = _.groupBy(tracks, function (track) {
                    return track.artist_id;
                });

                _.each(artists, function (artist) {
                    artist.morceaux = groupedTracks[artist.artist_id];
                });
                window.sessionStorage.setItem('artists', JSON.stringify(artists));
                callback(artists);
            });
        };

        if (!inCache) {
            this.model.getArtists(function (artists) {
                next(artists);
            });
        } else {
            artists = JSON.parse(window.sessionStorage.getItem('artists'));
            callback(artists);
        }
    };
    return DatabaseEmulator;
})();
//# sourceMappingURL=DatabaseEmulator.js.map
