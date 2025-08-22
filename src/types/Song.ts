export interface SongResponse {
    data: Song[];
}

export interface Song {
    name: string;
    artist: string;
    genre: string;
    uuid: string
}