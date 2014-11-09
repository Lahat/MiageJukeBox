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

        private model : IDataModel;


        //collections

        private playlists:Array<IPlaylist>;

        private tracks : {[index:number] : IJoinedTrack};

        // dynamics

        private currentlyPlaying : IHTML5Audio;

        // construct
        constructor($scope:ng.IScope, $window:ng.IWindowService) {
            this.$scope = $scope;
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
                console.log(this.playlists);
            });

        }


        public getPlaylists(): Array<IPlaylist>{
            console.log(this.playlists);
            return this.playlists;
        }

        /**
         * TODO déplacer dans le controler de la barre d'en bas
         * @param track_id Numero de la piste
         */
        public play(track_id:number){
            var track : IJoinedTrack = this.tracks[track_id];
            console.log("Lecture de  "+track.artist.name + " : " + track.title);
            if (track) {
                if(this.currentlyPlaying){
                    this.currentlyPlaying.pause();
                }
                this.currentlyPlaying = new Audio(track.mp3_url);
                this.currentlyPlaying.play();
            }
        }

    } // end class
}// end module


JukeBoxControllers.controller('MaBibliothequeMainController', ['$scope', '$window', ($scope, $window)=>{
    $scope.vm = new MaBibliotheque.MaBibliothequeMainController($scope, $window);
}]);


JukeBoxDirectives.directive('playlist', function(){


    return {
        restrict: 'E',
        templateUrl: "public/directivesTemplates/ma-bibliotheque/playlist.html"
    };

});

JukeBoxDirectives.directive('morceau', function(){
    return {
        restrict: 'E',
        templateUrl: "public/directivesTemplates/ma-bibliotheque/morceau.html"
    };
});
