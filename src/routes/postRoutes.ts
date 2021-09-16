import express from 'express'
import { getAllPosts, getOnePost, createPost, updatePost, deletePost } from '../controllers/postController'
import { protect } from '../middleware/auth.middleware'
export const postRouter = express.Router()

postRouter.route('/').get(getAllPosts).post(protect, createPost)
postRouter.route('/:id').get(getOnePost).patch(protect, updatePost).delete(protect, deletePost)
