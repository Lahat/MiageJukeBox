/**
 * Created by Geoffrey on 09/11/2014.
 */

/// <reference path="../headers/Data.d.ts"/>

declare var DataModel;

class DatabaseEmulator
{
    private model : IDataModel;

    constructor(){
        this.model = new DataModel();
    }

    getTracks( callback : Function): void{
        var inCache : boolean = window.sessionStorage.getItem('tracks') !== null;

        var next:Function = (tracks: Array<ITrack>)=>{
            this.getArtists((artists: Array<IArtist>)=>{
                var artistsGrouped : {[index:number]:IArtist};
                artistsGrouped =  _.indexBy(artists, (artiste :IArtist)=>{
                    return artiste.artist_id;
                });


                _.each(tracks, (track : IJoinedTrack)=>{
                    track.artist = artistsGrouped[track.artist_id];
                });

                callback(tracks);
            });
        }

        if(!inCache){
            this.model.getTracks((tracks : Array<ITrack>)=>{
                window.sessionStorage.setItem('tracks', JSON.stringify(tracks));
                next(tracks);
            });
        }
        else {
            var tracks: Array<ITrack> = JSON.parse(window.sessionStorage.getItem('tracks'));
            next(tracks);
        }
    }

    getArtists(callback: Function) : void {

        var inCache : boolean = window.sessionStorage.getItem('artists') !== null;

        var artists : Array<IArtist>;

        if(!inCache){
            this.model.getArtists((artists : Array<IArtist>)=>{
                window.sessionStorage.setItem('artists', JSON.stringify(artists));
                callback(artists);
            });
        }else{
            artists = JSON.parse(window.sessionStorage.getItem('artists'));
            callback(artists);
        }
    }
}