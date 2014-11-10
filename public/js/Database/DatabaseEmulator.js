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
        this.model.getTracks(function (tracks) {
            _this.model.getArtists(function (artists) {
                var artistsGrouped;

                artistsGrouped = _.indexBy(artists, function (artiste) {
                    return artiste.artist_id;
                });

                _.each(tracks, function (track) {
                    track.artist = artistsGrouped[track.artist_id];
                });

                callback(tracks);
            });
        });
    };
    return DatabaseEmulator;
})();
//# sourceMappingURL=DatabaseEmulator.js.map
