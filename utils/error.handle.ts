import { type Response } from 'express'

const handleHttpError = (res: Response, message: string, error?: any): void => {
  const response = {
    message,
    error: error != null ? error.message : null
  }
  res.status(500).send(response)
}

export { handleHttpError }
