import express from 'express';
import dotenv from 'dotenv';
dotenv.config();

import connectDB from './config/db.js';

const app = express();

connectDB();

app.get('/user', function (req, res) {
  res.send('Hello World')
})

app.listen(process.env.PORT || 3000, () => console.log("Server is running..."));