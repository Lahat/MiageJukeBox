/**
 * Created by Geoffrey on 09/11/2014.
 */

/// <reference path="../headers/JukeBox.d.ts"/>

module DataStore{

    declare var URL :string;

    export interface ITrack{
        artist_id: number;
        track_id: number;
        title: string;
        mp3_url : URL;
    }


    export class DataModel {

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
    }
}

