/// <reference path="./JukeBox.d.ts" />

declare module DataStore{



    interface IArtist{
        artist_id : number;
        name : string;
        image_url : string;
        info : string;
    }

    interface ITrack{
        artist_id: number;
        track_id: number;
        title: string;
        mp3_url : string;
    }

    interface IJoinedTrack extends ITrack{
        artist : IArtist;
    }

    class DataModel{
        getTracks(Function) : void ;
    }



}


declare class DataBaseEmulator{

}