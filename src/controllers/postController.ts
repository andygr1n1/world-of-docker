import { NextFunction } from 'express'
import { Post } from '../models/postModel'

export const getAllPosts = async (req: any, res: any, next: NextFunction) => {
    try {
        const posts = await Post.find()
        console.log('req.params:::', req.params)
        console.log('posts:::', posts)
        res.status(200).json({
            status: 'success',
            results: posts.length,
            data: { posts },
        })
    } catch (e) {
        res.status(400).json({
            status: 'error',
        })
        console.log('getAllPosts Error:::', e)
    }
    next()
}

export const getOnePost = async (req: any, res: any, next: NextFunction) => {
    try {
        const post = await Post.findById(req.params.id)

        res.status(200).json({
            status: 'success',
            data: {
                post,
            },
        })
    } catch (e) {
        res.status(400).json({
            status: 'error',
        })
        console.log('getOnePost Error:::', e)
    }
    next()
}

export const createPost = async (req: any, res: any, next: NextFunction) => {
    try {
        const post = await Post.create(req.body)

        res.status(200).json({
            status: 'success',
            data: {
                post,
            },
        })
    } catch (e) {
        res.status(400).json({
            status: 'error',
        })
        console.log('createPost Error:::', e)
    }
    next()
}

export const updatePost = async (req: any, res: any, next: NextFunction) => {
    try {
        const post = await Post.findByIdAndUpdate(req.params.id, req.body, {
            new: true,
            runValidators: true,
        })

        res.status(200).json({
            status: 'success',
            data: {
                post,
            },
        })
    } catch (e) {
        res.status(400).json({
            status: 'error',
        })
        console.log('updatePost Error:::', e)
    }
    next()
}

export const deletePost = async (req: any, res: any, next: NextFunction) => {
    try {
        const post = await Post.findByIdAndDelete(req.params.id)

        res.status(200).json({
            status: 'success',
        })
    } catch (e) {
        res.status(400).json({
            status: 'error',
        })
        console.log('deletePost Error:::', e)
    }
    next()
}
