export const configs = {
    MONGO_IP: process.env.MONGO_IP || 'code-camp-mongo',
    MONGO_PORT: process.env.MONGO_PORT || '27017',
    MONGO_USER: process.env.MONGO_USER,
    MONGO_PASSWORD: process.env.MONGO_PASSWORD,
    REDIS_URL: process.env.REDIS_URL || 'code-camp-redis',
    REDIS_PORT: process.env.REDIS_PORT || '6379',
    REDIS_SECRET: process.env.REDIS_SECRET || 'secret',
}
