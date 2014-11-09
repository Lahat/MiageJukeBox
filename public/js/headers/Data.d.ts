/// <reference path="./JukeBox.d.ts" />

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

interface IPlaylist{
    id: number;
    name: String;
    morceaux : Array<ITrack>;
}

interface IDataModel{
    getTracks(Function) : void ;
    getArtists(Function) : void ;
}


interface IHTML5Audio{
    play();
    pause();
    paused : boolean;
    duration : number;
    played : TimeRanges;
}