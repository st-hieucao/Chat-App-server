import mongoose from 'mongoose';
import dotenv from 'dotenv';
dotenv.config();

async function connectDB(){
  const url = process.env.DB_URL;

  try {
    await mongoose.connect(url, {
      useNewUrlParser: true,
      useUnifiedTopology: true,
      useCreateIndex: true,
    })
    console.log("connected to db");
  } catch (error) {
      console.log(error);
  }
};

export default connectDB;