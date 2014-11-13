/// <reference path="./JukeBox.d.ts" />

interface IArtist{
    artist_id : number;
    name : string;
    image_url : string;
    info : string;
}

interface IJoindedArtist extends IArtist{
    morceaux: Array<ITrack>;
}

interface ITrack{
    artist_id: number;
    track_id: number;
    title: string;
    mp3_url : string;
}

interface IJoinedTrack extends ITrack{
    artist : IJoindedArtist;
    position?: number;
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

