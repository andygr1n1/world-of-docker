import express from 'express'
import { signUp, getAllUsers } from './../controllers/authController'
import { login } from '../controllers/authController'

export const authRouter = express.Router()

authRouter.route('/').get(getAllUsers)
authRouter.route('/signup').post(signUp)
authRouter.route('/login').post(login)
