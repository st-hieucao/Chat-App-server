import express from 'express';
// import connectDB from './config/db.js';

const app = express();
const port = 8080;

// connectDB();

app.get('/', function (req, res) {
  res.send('Hello World')
})

app.listen(port, (req, res) => {
  console.log(`Example app listening on port ${port}`)
});
