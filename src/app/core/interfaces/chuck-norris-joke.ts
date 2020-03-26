export interface ChuckNorrisJoke {
    categories: string[];
    created_at: string;
    icon_url:   string;
    id:         string;
    updated_at: string;
    url:        string;
    value:      string;
}

export interface JokesQueryResult {
    total:  number;
    result: ChuckNorrisJoke[];
}
