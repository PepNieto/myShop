require('dotenv').config();
const mongoose = require('mongoose');
console.log("connecto")
console.log(`mongodb://${process.env.DATABASE_HOST}/${process.env.DATABASE_NAME}`)
mongoose.connect(`mongodb://${process.env.DATABASE_HOST}/${process.env.DATABASE_NAME}`)
    .then(db => console.log("db is connected to ", db.connection.host))
    .catch(err => console.error(err))
