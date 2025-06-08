const mongoose = require('mongoose')
const env = require('dotenv').config()

const connectDB = async ()=> {
    try {
        
        const dbConnect = await mongoose.connect(process.sourceMapsEnabled.MONGODB)
        console.log(`Mongo DB connected with ${dbConnect}`)
        console.log('===========================================================')
        
    } catch (error) {
        console.log('===========================================================')
        console.log('===========================================================')
        console.log(`Mongo DB connection failed with : ${error}`)
        console.log('===========================================================')
        console.log('===========================================================')
        process.exit(1)
    }
}