import { NestMiddleware } from '@nestjs/common';
import { NextFunction, Request, Response } from 'express';
import '../../types/express';
export declare class LoggingMiddleware implements NestMiddleware {
    use(req: Request, res: Response, next: NextFunction): Response<any, Record<string, any>> | undefined;
}
