import dotenv from 'dotenv'
import mongoose from 'mongoose'
dotenv.config()

async function dbConnect (): Promise<void> {
  console.log('connecto')
  console.log(`mongodb://${process.env.DATABASE_HOST}/${process.env.DATABASE_NAME}`)
  const dbUri = `mongodb://${process.env.DATABASE_HOST}/${process.env.DATABASE_NAME}`
  mongoose.connect(dbUri)
    .then((db: any) => { console.log('db is connected to ', db.connection.host) })
    .catch((err: Error) => { console.error(err) })
}

export default dbConnect
