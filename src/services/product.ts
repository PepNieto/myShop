import ProductModel from '../models/product'
import { type Product } from '../interfaces/product.interface'

const generateAllSubsequences = (productIds: number[]): number[][] => {
  const subsequences: any = []

  const generate = (start: number, subsequence: number[]): void => {
    if (subsequence.length > 0) {
      subsequences.push([...subsequence])
    }

    for (let i = start; i < productIds.length; i++) {
      generate(i + 1, [...subsequence, productIds[i]])
    }
  }

  generate(0, [])

  const productSubseq = new ProductModel({
    subSequences: subsequences
  })

  productSubseq.save()
    .then(sub => {
      console.log('Subsequence saved:', sub)
    })
    .catch(err => {
      console.error('Error al guardar el documento:', err)
    })

  return subsequences
}

const listProducts = async (limit: number = 10): Promise<Product[]> => {
  return await ProductModel.find().sort({ createdAt: -1 }).limit(limit)
}

export { generateAllSubsequences, listProducts }
