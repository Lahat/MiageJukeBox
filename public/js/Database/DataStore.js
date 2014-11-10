/**
* Created by Geoffrey on 09/11/2014.
*/
/// <reference path="../headers/Data.d.ts"/>
/// <reference path="../headers/JukeBox.d.ts"/>
var DataModel = (function () {
    function DataModel() {
    }
    DataModel.prototype.getTracks = function (callback) {
        $.get("api/dirtyApi.php?table=" + "tracks").done(function (data) {
            var tracks = JSON.parse(data);
            callback(tracks);
        }).fail(function (error) {
            console.log(error);
        });
    };
    DataModel.prototype.getArtists = function (callback) {
        $.get("api/dirtyApi.php?table=" + "artists").done(function (data) {
            var artists = JSON.parse(data);
            callback(artists);
        }).fail(function (error) {
            console.log(error);
        });
    };
    return DataModel;
})();
//# sourceMappingURL=DataStore.js.map
