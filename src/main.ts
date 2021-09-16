import express from 'express'
import cors from 'cors'
import mongoose from 'mongoose'
import { configs } from '../config/config'
import { postRouter } from './routes/postRoutes'
import { authRouter } from './routes/userRoutes'
import session from 'express-session'
import redis from 'redis'
import connectRedis from 'connect-redis'

const { MONGO_USER, MONGO_PASSWORD, MONGO_IP, MONGO_PORT, REDIS_URL, REDIS_PORT, REDIS_SECRET } = configs

let redisStore = connectRedis(session)
let redisClient = redis.createClient({
    host: REDIS_URL,
    port: +REDIS_PORT,
})

const app = express()

app.enable('trust proxy')

app.use(cors({
    
}))

app.use(
    session({
        store: new redisStore({ client: redisClient }),
        secret: REDIS_SECRET,
        cookie: {
            secure: false,
            httpOnly: true,
            maxAge: 300000,
        },
        resave: false,
        saveUninitialized: false,
    }),
)

app.use(express.json())

const mongoURL = `mongodb://${MONGO_USER}:${MONGO_PASSWORD}@${MONGO_IP}:${MONGO_PORT}/?authSource=admin`

// ***RECONNECT FUNCTION***
// *** ->> ***
// const connectManager = () => {
//     mongoose
//         .connect(mongoURL)
//         .then(() => console.log('success connect to db'))
//         .catch((e) => {
//             console.log('error connecting to db', e)
//             setTimeout(connectManager, 10000)
//         })
// }
// connectManager()

mongoose
    .connect(mongoURL)
    .then(() => console.log('success connect to db'))
    .then(() => {
        app.get('/api/', (_, res, next) => {
            res.send('<h1> 🚀 🚀 🚀EXPRESS APP GO! 🚀 🚀 🚀 </h1>')
            next()
        })

        app.use('/api/v1/posts', postRouter)
        app.use('/api/v1/auth', authRouter)
    })
    .catch((e) => {
        console.log('error connecting to db', e)
    })

const PORT: number | string = process.env.PORT || 9909

app.listen(PORT, () => console.log(`listening on port ${PORT}`))
