/// <reference path="./angular.d.ts" />
/// <reference path="./bootstrap.d.ts" />
/// <reference path="../headers/underscore.d.ts" />
/// <reference path="../headers/Data.d.ts" />


interface Window{
    JukeBox : ng.IModule;
}

interface IJukeBoxBridge{
    getCurrentPlaylist():Array<IJoinedTrack>;
    enQueue(track:IJoinedTrack):void;
    play(track:IJoinedTrack):void;
    getLastAction():IJukeBoxBridgeLastAction;
    showArtistInfo(artist: IJoindedArtist);
    getCurrentArtist():IJoindedArtist;
}

declare enum IJukeBoxBridgeLastAction{}