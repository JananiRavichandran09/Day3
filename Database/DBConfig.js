import mongoose from 'mongoose'
import dotenv from 'dotenv'
dotenv.config()


const mongoDbconnectionstring = process.env.MONGODBCONNECTIONSTRING
const connectDB = async () => {
    try {
        console.log("connection string", mongoDbconnectionstring);
        const connection = await mongoose.connect(mongoDbconnectionstring)
        console.log("Connected to the MongoDB");
        return connection;
    } catch (error) {
        console.log("Error", error);
    }
}

export default connectDB