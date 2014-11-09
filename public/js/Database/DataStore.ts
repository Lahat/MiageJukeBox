/**
 * Created by Geoffrey on 09/11/2014.
 */

/// <reference path="../headers/Data.d.ts"/>
/// <reference path="../headers/JukeBox.d.ts"/>


class DataModel  implements IDataModel{

    public getTracks( callback : Function ){
        $.get("api/dirtyApi.php?table="+"tracks")

        .done((data:string)=>{
            var tracks : Array<ITrack> = JSON.parse(data);
            callback(tracks);
        })
        .fail((error:any)=>{
            console.log(error);
        });

    }
    public getArtists( callback : Function ){
        $.get("api/dirtyApi.php?table="+"artists")

            .done((data:string)=>{
                var artists : Array<IArtist> = JSON.parse(data);
                callback(artists);
            })
            .fail((error:any)=>{
                console.log(error);
            });

    }
}


