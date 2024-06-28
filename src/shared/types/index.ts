export interface Movie {
    id: number;
    title: string;
    description: string;
    rating: string;
    release_year: number;
    genre: string;
}

export interface Actor {
    name: string;
    photo: string;
}

export interface MovieDetailed {
    id: number;
    title: string;
    description: string;
    genre: string;
    release_year: number;
    actors: Actor[];
    rating: string;
    total_rates_count: string;
    poster: string;
}