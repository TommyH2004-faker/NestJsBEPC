// src/types/express.d.ts
import 'express';

declare module 'express' {
  interface Request {
    user?: {
      id: number,
      username: string,
      email: string,
      roles?: string[], // Assuming roles is an array of strings
    };
  }
}
