import mongoose from "mongoose";

const connectDB = async () => {
    try {
        const connection = await mongoose.connect(process.env.MONGO_URI,{
            useNewUrlParser: true,
            useUnifiedTopology: true
        })
        console.log("Data Base Connected Successfully ")
    } catch (error) {
        return error
    }

}
export default connectDB;