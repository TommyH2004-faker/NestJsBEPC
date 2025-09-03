import { Movie } from './movie.entity';
export declare class Episode {
    id: number;
    episode_number: number;
    title: string;
    video_url: string;
    subtitle_url: string;
    movie: Movie;
    created_at: Date;
}
