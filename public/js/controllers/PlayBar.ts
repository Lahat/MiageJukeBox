/**
 * Created by Geoffrey on 10/11/2014.
 */

/// <reference path="../headers/Data.d.ts" />
enum IJukeBoxBridgeLastAction{
    PLAYED,
    QUEUED,
    NONE
}
class PlayBar {

    private $scope : ng.IScope;
    private $rootScope: ng.IRootScopeService;
    private JukeBoxBridge : IJukeBoxBridge;


    private currentlyPlaying : IHTML5Audio;
    private currentlyPlayingTrack: IJoinedTrack;

    private currentPlaylist : Array<IJoinedTrack>;


    constructor($scope : ng.IScope, $rootScope : ng.IRootScopeService,  JukeBoxBridge : IJukeBoxBridge){
        this.$scope = $scope;
        this.JukeBoxBridge = JukeBoxBridge;
        this.$scope.$watchCollection('vm.currentPlaylist', (track : Array<IJoinedTrack>)=>{
            var action : IJukeBoxBridgeLastAction = this.JukeBoxBridge.getLastAction();
            if(action === IJukeBoxBridgeLastAction.PLAYED){
                 this.reIndexTracks();
                 this.playTrack(track[0]);
            }
            else if(action === IJukeBoxBridgeLastAction.QUEUED){
                console.log("Queued: "+track[0].title);
                this.reIndexTracks();
            }

        });
    }

    private reIndexTracks(){
        if(this.currentPlaylist){
            _.each(this.currentPlaylist, (track : IJoinedTrack, index : number)=>{
                track.position = index;
            });
        }
    }

    getCurrentPlaylist(){
        this.currentPlaylist =this.JukeBoxBridge.getCurrentPlaylist();
        return this.currentPlaylist;
    }

    private playTrack(track: IJoinedTrack){
        if(this.currentlyPlaying){
            this.currentlyPlaying.pause();
        }
        console.log("Playing: "+ track.title );
        this.currentlyPlaying = new Audio(track.mp3_url);
        this.currentlyPlayingTrack = track;
        this.currentlyPlaying.play();
    }

    isPlaying(){
        var isPlaying : boolean = false;
        if(this.currentlyPlaying){
            isPlaying = !this.currentlyPlaying.paused
        }
        return isPlaying;
    }

    playPause(){
        if(this.isPlaying()){
            this.currentlyPlaying.pause();
        }
        else{
            this.currentlyPlaying.play();
        }
    }

    playAlreadyQueuedTrack(track: IJoinedTrack){
        this.playTrack(track);
    }

    playNext(){
        if(this.hasNext()){
            var index =  this.currentlyPlayingTrack.position;
            var next : IJoinedTrack = this.currentPlaylist[index+1];
            if (next) {
                this.playTrack(next);
            }
        }
    }

    playPrevious(){
        if(this.hasPrevious()){
            var index =  this.currentlyPlayingTrack.position;
            var next : IJoinedTrack = this.currentPlaylist[index-1];
            if (next) {
                this.playTrack(next);
            }
        }
    }

    getCurrentlyPlaying() : IJoinedTrack{
        return this.currentlyPlayingTrack;
    }

    hasNext(){
        var ret :boolean = false;
        if(this.currentlyPlayingTrack){
            var index =  this.currentlyPlayingTrack.position;
            ret = (index < this.currentPlaylist.length-1);
        }
        return ret;
    }
    hasPrevious(){
        var ret :boolean = false;
        if(this.currentlyPlayingTrack){
            var index = this.currentlyPlayingTrack.position;
            ret = (index > 0);
        }
        return ret;
    }


}



window.JukeBox.controller('PlayBar', ['$scope', '$rootScope', 'JukeBoxBridge', function($scope, $rootScope : ng.IRootScopeService,  JukeBoxBridge : IJukeBoxBridge){
    $scope.vm = new PlayBar($scope, $rootScope ,  JukeBoxBridge);
}]);