declare module 'express' {
  export interface Request {
    user?: {
      id: string;
      email: string;
    };
  }
}

declare module 'jsonwebtoken' {
  export interface JwtPayload {
    userId: string;
  }
}

declare module 'redis' {
  export interface RedisClient {
    getAsync(key: string): Promise<string | null>;
    setAsync(key: string, value: string): Promise<void>;
    delAsync(key: string): Promise<void>;
  }
}
