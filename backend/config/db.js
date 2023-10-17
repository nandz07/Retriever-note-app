const mongoose=require("mongoose");

const connectDB=async()=>{
    try {
        const conn=await mongoose.connect(process.env.MONGO_URI,{
            useNewUrlParser:true
        })
        console.log(`mongoDB Connected: ${conn.connection.host}`);
    } catch (error) {
        console.error(`Error: ${error}`);
        process.exit()
    }
}

module.exports = connectDB;