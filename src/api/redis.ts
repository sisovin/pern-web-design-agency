import Redis from 'ioredis';

const redis = new Redis(process.env.REDIS_URL);

export const setCache = async (key: string, value: any, ttl: number) => {
  await redis.set(key, JSON.stringify(value), 'EX', ttl);
};

export const getCache = async (key: string) => {
  const data = await redis.get(key);
  return data ? JSON.parse(data) : null;
};

export const deleteCache = async (key: string) => {
  await redis.del(key);
};

export const setSession = async (sessionId: string, sessionData: any, ttl: number) => {
  await redis.set(`session:${sessionId}`, JSON.stringify(sessionData), 'EX', ttl);
};

export const getSession = async (sessionId: string) => {
  const data = await redis.get(`session:${sessionId}`);
  return data ? JSON.parse(data) : null;
};

export const deleteSession = async (sessionId: string) => {
  await redis.del(`session:${sessionId}`);
};

export const rateLimit = async (key: string, limit: number, ttl: number) => {
  const current = await redis.incr(key);
  if (current === 1) {
    await redis.expire(key, ttl);
  }
  return current > limit;
};
