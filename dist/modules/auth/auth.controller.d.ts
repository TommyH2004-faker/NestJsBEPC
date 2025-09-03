import { AuthService } from './auth.service';
import { UsersService } from '../users/users.service';
import { Request, Response } from 'express';
export declare class AuthController {
    private readonly authService;
    private userservice;
    constructor(authService: AuthService, userservice: UsersService);
    register(userData: any): Promise<import("../../entity/User").User>;
    login(req: Request): {
        access_token: string;
        refresh_token: string;
    };
    refreshToken({ refresh_token }: {
        refresh_token: string;
    }): Promise<{
        access_token: string;
        refresh_token: string;
    }>;
    getProfile(req: Request): {
        id: number | undefined;
        username: string | undefined;
        email: string | undefined;
        role: string | undefined;
    };
    existsByEmails(email: string): Promise<string>;
    existsByUsername(name: string): Promise<string>;
    activate(code: string, res: Response): Promise<Response<any, Record<string, any>>>;
    forgotPassword(email: string): Promise<{
        success: boolean;
        message: string;
    }>;
}
