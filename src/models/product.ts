import { Schema, Types, model, Model } from 'mongoose'
import { type Product } from '../interfaces/product.interface'

const ProductSchema = new Schema <Product>(
  {
    subSequences: [[Number]]
  },
  {
    timestamps: true,
    versionKey: false
  }
)

const ProductModel = model('products', ProductSchema)

export default ProductModel
