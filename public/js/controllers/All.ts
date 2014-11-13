/**
 * Created by Geoffrey on 08/11/2014.
 */

/// <reference path="../headers/Data.d.ts" />
declare var DatabaseEmulator;

class AllController {

    // Scope angular
    private $scope : ng.IScope;

    private JukeBoxBridge : IJukeBoxBridge;
    private model : IDataModel;

    // Membres


    private tracks : Array<IJoinedTrack>;



    // Constructeur
    constructor($scope: ng.IScope, JukeBoxBride: IJukeBoxBridge){
        this.$scope = $scope;
        this.JukeBoxBridge = JukeBoxBride;
        this.model = new DatabaseEmulator();


        this.model.getTracks((tracks: Array<IJoinedTrack>)=>{
            this.tracks = tracks;
        });
    }
}

window.JukeBox.controller('AllController', ['$scope', 'JukeBoxBridge', function($scope, JukeBoxBridge){
    $scope.vm = new AllController($scope, JukeBoxBridge);
}]);