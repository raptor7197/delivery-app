import mongoose from 'mongoose';

const connectDB = async() =>{
    try{
        mongoose.connection.on('connected',()=>console.log("database connected"));
        await moongoose.connect(`${process.env.MONGO_URL}/greencart`)
    } catch (error) {
        console.error(error.message);
    }
}