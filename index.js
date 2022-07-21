import express from 'express';
import cors from 'cors'
import dotenv from 'dotenv';
import connectDB from './config/db.js';
import userRouter from './routers/userRouter.js';
import connectSocket from './utils/socket.js';

const app = express();
dotenv.config();
connectDB();
connectSocket();

app.use(cors());
app.use(express.json({ limit: "50mb" }));
app.use(express.urlencoded({ limit: "50mb", extended: true }));

// Router
app.use("/user", userRouter);

app.listen(process.env.PORT || 3000, () => console.log("Server is running..."));
