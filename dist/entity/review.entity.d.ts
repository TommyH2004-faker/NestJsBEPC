import { User } from './User';
import { Movie } from './movie.entity';
export declare class Review {
    id: number;
    rating: number;
    comment: string;
    user: User;
    movie: Movie;
    created_at: Date;
}
