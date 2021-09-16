import mongoose from 'mongoose'

export interface IUser extends mongoose.Document {
    username: string
    password: string
}

export interface IPost extends mongoose.Document {
    title: string
    body: string
}
