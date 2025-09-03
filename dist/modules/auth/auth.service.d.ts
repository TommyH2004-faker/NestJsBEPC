import { UsersService } from '../users/users.service';
import { JwtService } from '@nestjs/jwt';
import { User } from '../../entity/User';
export declare class AuthService {
    private readonly userService;
    private readonly jwtservice;
    constructor(userService: UsersService, jwtservice: JwtService);
    login(user: {
        id: number;
        username: string;
        email: string;
        roles: string[];
        enabled: boolean;
    }): {
        access_token: string;
        refresh_token: string;
    };
    verityRefreshToken(refresh_token: string): Promise<User>;
}
