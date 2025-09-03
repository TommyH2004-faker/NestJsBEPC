import { User } from './User';
import { Movie } from './movie.entity';
export declare class Favorite {
    id: number;
    user: User;
    movie: Movie;
    created_at: Date;
}
