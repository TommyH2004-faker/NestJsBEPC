import { NestMiddleware } from '@nestjs/common';
export declare class WintonMiddleware implements NestMiddleware {
    use(req: any, res: any, next: () => void): void;
}
