import { User } from './User';
import { Movie } from './movie.entity';
export declare class Comment {
    id: number;
    content: string;
    user: User;
    movie: Movie;
    created_at: Date;
}
