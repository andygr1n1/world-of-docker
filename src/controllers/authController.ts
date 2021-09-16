import { NextFunction } from 'express'
import { User } from '../models/userModel'
import bcrypt from 'bcryptjs'
import { IUser } from '../types'

export const signUp = async (req: any, res: any, next: NextFunction) => {
    const { username, password } = req.body

    try {
        const hashPassword = await bcrypt.hash(password, 12)

        const newUser = await User.create({
            username,
            password: hashPassword,
        })
        req.session.user = newUser
        res.status(201).json({
            status: 'success',
            data: {
                user: newUser,
            },
        })
    } catch (e) {
        res.status(400).json({
            status: 'error',
        })
        console.log('signUp Error:::', e)
    }

    next()
}

export const login = async (req: any, res: any, next: NextFunction) => {
    const { username, password } = req.body

    try {
        const user = await User.findOne({ username })

        if (!user) {
            return res.status(404).json({
                status: 'error',
                message: "user doesn't exist",
            })
        }
        const isValid = await bcrypt.compare(password, user.password)

        if (!isValid) {
            return res.status(404).json({
                status: 'error',
                message: 'password is invalid',
            })
        }
        req.session.user = user
        res.status(200).json({
            status: 'success login',
        })
    } catch (e) {
        res.status(400).json({
            status: 'error',
        })
        console.log('login Error:::', e)
    }

    next()
}

export const getAllUsers = async (req: any, res: any, next: NextFunction) => {
    try {
        const users = await User.find()
        console.log('req.params:::', req.params)
        console.log('users:::', users)
        res.status(200).json({
            status: 'success',
            results: users.length,
            data: { users },
        })
    } catch (e) {
        res.status(400).json({
            status: 'error',
        })
        console.log('getUsers Error:::', e)
    }

    next()
}
