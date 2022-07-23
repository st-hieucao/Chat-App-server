import express from 'express';
import cors from 'cors'
import dotenv from 'dotenv';
import { createServer } from "http";

import connectDB from './config/db.js';
import userRouter from './routers/userRouter.js';
import connectSocket from './utils/socket.js';

const app = express();
const server = createServer(app);
dotenv.config();
connectDB();
connectSocket(server);

app.use(cors());
app.use(express.json({ limit: "50mb" }));
app.use(express.urlencoded({ limit: "50mb", extended: true }));

app.get('/', (req, res) => {
  res.send('Hello Cao Kha hieu');
});

// Router
app.use("/user", userRouter);

server.listen(process.env.PORT || 3000, () => console.log("Server is running..."));
