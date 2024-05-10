
export interface ApiRespose<T>{
    results:T;
}
export interface DataResponse{
    characters:ApiRespose<Characters[]>;
    episodes:ApiRespose<Episode[]>;
}


export interface Episode{
    name:string;
    episode:string;
}

export interface Characters {
    id:       string;
    name:     string;
    status:   string;
    species:  string;
    gender:   string;
    image:    string;
    isFavorite?: boolean;
}

