/**
 * Created by Geoffrey on 08/11/2014.
 */

/// <reference path="../headers/JukeBox.d.ts" />
/// <reference path="../headers/Data.d.ts" />

declare var DatabaseEmulator;

module MaBibliotheque{

    export class MaBibliothequeMainController {

        // angular
        private $scope:ng.IScope;

        private JukeBoxBridge : IJukeBoxBridge;
        private model : IDataModel;


        //collections

        private playlists:Array<IPlaylist>;

        private tracks : {[index:number] : IJoinedTrack};



        // construct
        constructor($scope:ng.IScope, JukeBoxBridge : IJukeBoxBridge) {
            this.$scope = $scope;

            this.JukeBoxBridge = JukeBoxBridge;
            this.playlists = new Array<IPlaylist>();

            this.model = new DatabaseEmulator();

            this.model.getTracks((tracks : Array<IJoinedTrack>)=>{

                this.tracks = _.indexBy(tracks, (track:IJoinedTrack)=>{
                    return track.track_id;
                });


                var playlistDemo : IPlaylist = {
                    id : 1,
                    name: "Playlist demo",
                    morceaux : tracks
                };

                this.playlists.push(playlistDemo);
                this.$scope.$apply();
            });
        }


        public getPlaylists(): Array<IPlaylist>{
            return this.playlists;
        }


        public play(track_id:number){
            var track : IJoinedTrack = this.tracks[track_id];
            //console.log("Lecture de "+track.artist.name + " : " + track.title);
            this.JukeBoxBridge.play(track);
        }

        public enQueue(track_id:number){
            var track : IJoinedTrack = this.tracks[track_id];
            this.JukeBoxBridge.enQueue(track);
        }

    } // end class
}// end module


window.JukeBox.controller('MaBibliothequeMainController', ['$scope',  'JukeBoxBridge', ($scope, JukeBoxBridge)=>{
    $scope.vm = new MaBibliotheque.MaBibliothequeMainController($scope, JukeBoxBridge);
}]);


window.JukeBox.directive('playlist', function(){
    return {
        restrict: 'E',
        templateUrl: "public/directivesTemplates/ma-bibliotheque/playlist.html"
    };

});

window.JukeBox.directive('morceau', function(){
    return {
        restrict: 'E',
        templateUrl: "public/directivesTemplates/ma-bibliotheque/morceau.html"
    };
});
