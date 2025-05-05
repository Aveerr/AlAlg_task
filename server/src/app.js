const express = require('express');
const post_calc = require('./routes/post_calc')
const app = express();

app.use(express.json());
app.use('/calculate',post_calc)

module.exports = app