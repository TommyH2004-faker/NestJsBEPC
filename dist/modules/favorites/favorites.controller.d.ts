import { FavoritesService } from './favorites.service';
import { Favorite } from 'src/entity/favorite.entity';
export declare class FavoritesController {
    private readonly favoritesService;
    constructor(favoritesService: FavoritesService);
    findAll(): Promise<Favorite[]>;
    findByUserId(userId: number): Promise<Favorite[]>;
    add(req: any, movieId: number): Promise<Favorite>;
    remove(req: any, movieId: number): Promise<{
        message: string;
    }>;
    getFavoriteMovies(userId: number): Promise<number[]>;
}
