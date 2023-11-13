require('dotenv').config();
const mongoose = require('mongoose');

async function dbConnect(): Promise<void>{
    console.log("connecto")
    console.log(`mongodb://${process.env.DATABASE_HOST}/${process.env.DATABASE_NAME}`)
    const db_uri = `mongodb://${process.env.DATABASE_HOST}/${process.env.DATABASE_NAME}`
    mongoose.connect(db_uri)
    .then((db : any)=> console.log("db is connected to ", db.connection.host))
    .catch((err : Error) => console.error(err))
}

export default dbConnect;