import { Movie } from './movie.entity';
export declare class Genre {
    id: number;
    name: string;
    slug: string;
    movies: Movie[];
    created_at: Date;
    updated_at: Date;
}
