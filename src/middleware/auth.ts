import { type Request, type Response, type NextFunction } from 'express'
import jwt from 'jsonwebtoken'

interface TokenData extends Request {
  // eslint-disable-next-line @typescript-eslint/ban-types
  user?: Object
}

const checkToken = (req: TokenData, res: Response, next: NextFunction): void => {
  const token = req.headers.authorization

  if (token == null) {
    res.status(403).json({ message: 'No token provided.' })
  }

  const secretKey = process.env.JWT_SECRET_KEY
  if (secretKey == null) {
    res.status(500).json({ message: 'Secret key is not configured.' })
    try {
      const decoded = jwt.verify(token as string, process.env.JWT_SECRET_KEY as string)
      req.user = decoded
      next()
    } catch (error) {
      res.status(401).json({ message: 'Unauthorized!' })
    }
  }
}
export { checkToken }
