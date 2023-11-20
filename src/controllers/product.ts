import { type Request, type Response } from 'express'
import { handleHttpError } from '../../utils/error.handle'
import { generateAllSubsequences } from '../services/product'

import ProductModel from '../models/product'

const generateSubsequences = async (req: Request, res: Response): Promise<void> => {
  try {
    const productIds = req.body.productIds
    const subsequences = generateAllSubsequences(productIds)

    res.status(201).json(subsequences)
  } catch (e: any) {
    handleHttpError(res, 'ERROR_GENERATING_SUBSEQUENCES', e)
  }
}

const listSubsequences = async (req: Request, res: Response): Promise<void> => {
  try {
    const subsequences = await ProductModel.find().sort({ createdAt: -1 }).limit(10)
    console.log('subsequences')
    console.log(subsequences)
    res.json(subsequences)
  } catch (e: any) {
    handleHttpError(res, 'ERROR_LISTING_SUBSEQUENCES', e)
  }
}

export { generateSubsequences, listSubsequences }
