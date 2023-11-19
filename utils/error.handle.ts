import { type Response } from 'express'

const handleHttpError = (res: Response, message: string, error?: any) => {
  const response = {
    message,
    error: error ? error.message : null
  }
  res.status(500).send(response)
}

export { handleHttpError }
