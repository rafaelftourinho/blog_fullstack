const express = require('express');
const cors = require('cors');
const postRoute = require('./routes/postRoute');

const app = express();
app.use(express.json());
app.use(cors());
app.use('/posts', postRoute);

app.get('/', (_req, res) => {
  res.send();
});
module.exports = app;
