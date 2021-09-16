import { NextFunction } from 'express'

export const protect = (req: any, res: any, next: NextFunction) => {
    const { user } = req.session

    if (!user) {
        console.log('session error')

        return res.status(400).json({
            status: 'error',
            message: 'unauthorized',
        })
    }

    req.user = user

    next()
}
