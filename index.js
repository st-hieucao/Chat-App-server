import express from 'express';
import connectDB from './config/db.js';

const app = express();
const port = 4000;

connectDB();

app.get('/user', function (req, res) {
  res.send('Hello World')
})

// app.listen(port, (req, res) => {
//   console.log(`Example app listening on port ${port}`)
// });

app.listen(port || 3000, function(){
  console.log("Express server listening on port %d in %s mode", this.address().port, app.settings.env);
});
