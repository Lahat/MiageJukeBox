/**
 * Created by Geoffrey on 08/11/2014.
 */

/// <reference path="../headers/JukeBox.d.ts" />
/// <reference path="../headers/Data.d.ts" />

declare var DatabaseEmulator;

class MaBibliothequeController {

    // angular
    private $scope:ng.IScope;

    private JukeBoxBridge : IJukeBoxBridge;
    private model : IDataModel;


    private artistModalId : string = "#artist-modal";


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
            this.forceRefresh();
        });
    }


    public getPlaylists(): Array<IPlaylist>{
        return this.playlists;
    }


    public artistInfo(track: IJoinedTrack){
        this.JukeBoxBridge.showArtistInfo(track.artist);
        $(this.artistModalId).modal('show');
    }


    public play(track:IJoinedTrack){

        this.JukeBoxBridge.play(track);
    }

    public enQueue(track:IJoinedTrack){

        this.JukeBoxBridge.enQueue(track);
    }

    private forceRefresh(){
        if(!this.$scope.$$phase)
            this.$scope.$apply();
    }

} // end class



window.JukeBox.controller('MaBibliothequeController', ['$scope',  'JukeBoxBridge', ($scope, JukeBoxBridge)=>{
    $scope.vm = new MaBibliothequeController($scope, JukeBoxBridge);
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