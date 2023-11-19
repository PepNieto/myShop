import jwt from 'jsonwebtoken'
import { type Request, type Response } from 'express'

const getToken = (req: Request, res: Response): void => {
  const secretKey = process.env.JWT_SECRET_KEY
  if (secretKey === null || secretKey === undefined || secretKey.trim() === '') {
    res.status(500).json({ message: 'Secret key is not configured' })
    return
  }
  const payload = {
    user: 'Ed'
  }
  const token = jwt.sign(payload, secretKey, {
    expiresIn: '10m'
  })

  res.status(200).json({ token })
}

export { getToken }
