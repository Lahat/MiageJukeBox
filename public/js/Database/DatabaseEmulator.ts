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
            this.model.getArtists((artists: Array<IJoindedArtist>)=>{
                var artistsGrouped : {[index:number]:IJoindedArtist};
                artistsGrouped =  _.indexBy(artists, (artiste :IJoindedArtist)=>{
                    return artiste.artist_id;
                });

                var groupedTracks : {[index:number]: Array<ITrack>};
                groupedTracks = _.groupBy(tracks, (track: ITrack)=>{
                    return track.artist_id;
                });

                _.each(tracks, (track : IJoinedTrack)=>{
                    track.artist = artistsGrouped[track.artist_id];
                    track.artist.morceaux = [];
                    _.each(groupedTracks[track.artist.artist_id], (trackToCopy: IJoinedTrack)=>{
                        var copy : IJoinedTrack = _.clone(trackToCopy);
                        copy.artist = null;
                        track.artist.morceaux.push(copy);
                    });

                });

                window.sessionStorage.setItem('tracks', JSON.stringify(tracks));

                _.each(tracks, (track : IJoinedTrack)=>{
                    _.each(track.artist.morceaux, (innerTrack:IJoinedTrack)=>{
                        innerTrack.artist = _.clone(track.artist);
                        innerTrack.isFinal = true;
                        innerTrack.artist.morceaux = null;
                    });
                });
                callback(tracks);
            });
        }

        if(!inCache){
            this.model.getTracks((tracks : Array<ITrack>)=>{
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

        var next : Function = (artists : Array<IArtist>)=>{
            this.model.getTracks((tracks: Array<ITrack>)=>{
                var groupedTracks : {[index:number]: Array<ITrack>};
                groupedTracks = _.groupBy(tracks, (track: ITrack)=>{
                    return track.artist_id;
                });

                _.each(artists, (artist: IJoindedArtist)=>{
                    artist.morceaux = groupedTracks[artist.artist_id];
                });

                // TRES important que la serialisation se fasse AVANT un ajout récursif. sinon JSON refusera de serialiser.
                window.sessionStorage.setItem('artists', JSON.stringify(artists));

                _.each(artists, (artist: IJoindedArtist)=>{
                    _.each(artist.morceaux, (track:IJoinedTrack)=>{
                        track.artist = artist;
                    });
                });

                callback(artists);
            });
        };

        if(!inCache){
            this.model.getArtists((artists : Array<IArtist>)=>{
                next(artists);
            });
        }else{
            artists = JSON.parse(window.sessionStorage.getItem('artists'));
            callback(artists);
        }
    }
}