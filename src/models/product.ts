import { Schema, Types, model, Model } from "mongoose";
import { Product } from "../interfaces/product.interface";

const ProductSchema = new Schema <Product>(
    {
        index : { 
            type: Number
        },
        createdAt: 
        { 
            type: Date
        },
        subSequences: 
        { 
            type: Number
        }
    },
        {
            timestamps: true,
            versionKey: false,
        }
)

const ProductModel = model("items", ProductSchema);

export default ProductSchema;