import { Review } from './review.entity';
import { Favorite } from './favorite.entity';
import { Comment } from './comment.entity';
import { Role } from './role.entity';
export declare class User {
    id: number;
    name: string;
    email: string;
    password: string;
    refreshToken: string;
    createdAt: Date;
    enabled: boolean;
    updatedAt: Date;
    gender: string;
    avatar: string;
    activationCode: string;
    comments: Comment[];
    reviews: Review[];
    favorites: Favorite[];
    roles: Role[];
}
