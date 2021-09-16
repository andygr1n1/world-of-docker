import mongoose from 'mongoose'
import { IPost } from '../types'

const postSchema = new mongoose.Schema({
    title: {
        type: String,
        required: [true, 'Post must have title'],
    },
    body: {
        type: String,
        required: [true, 'Post must have body'],
    },
})

export const Post = mongoose.model<IPost>('Post', postSchema)
