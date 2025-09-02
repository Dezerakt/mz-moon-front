export interface GenreResponse {
    data: Genre[];
}

export interface Genre {
    id: number;
    name: string;
    uuid: string
}