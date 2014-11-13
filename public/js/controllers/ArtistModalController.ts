/**
 * Created by Geoffrey on 13/11/2014.
 */

/// <reference path="../headers/Data.d.ts" />


class ArtistModalController {

    // Scope angular
    private $scope : ng.IScope;

    private JukeBoxBridge : IJukeBoxBridge;

    public str = "Yolo";

    // Constructeur
    constructor($scope: ng.IScope, JukeBoxBride: IJukeBoxBridge){
        this.$scope = $scope;
        this.JukeBoxBridge = JukeBoxBride;
    }

    public getArtist(){
        return this.JukeBoxBridge.getCurrentArtist();
    }

    public play(track: IJoinedTrack){

        this.JukeBoxBridge.play(track);
    }

    public enQueue(track:IJoinedTrack){
        this.JukeBoxBridge.enQueue(track);
    }
}

window.JukeBox.controller('ArtistModalController', ['$scope', 'JukeBoxBridge', function($scope, JukeBoxBridge){
    $scope.vm = new ArtistModalController($scope, JukeBoxBridge);
}]);