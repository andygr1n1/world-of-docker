import mongoose from 'mongoose'
import { IUser } from '../types'

const userSchema = new mongoose.Schema({
    username: {
        type: String,
        required: [true, 'User must have an username'],
        unique: true,
    },
    password: {
        type: String,
        required: [true, 'User must have a password'],
    },
})

export const User = mongoose.model<IUser>('User', userSchema)
