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
        this.model.getTracks((tracks : Array<ITrack>)=>{
            this.model.getArtists((artists : Array<IArtist>)=>{
                var artistsGrouped : {[index:number]:IArtist};

                artistsGrouped =  _.indexBy(artists, (artiste :IArtist)=>{
                    return artiste.artist_id;
                });


                _.each(tracks, (track : IJoinedTrack)=>{
                    track.artist = artistsGrouped[track.artist_id];
                });

                callback(tracks);
            });
        });
    }
}