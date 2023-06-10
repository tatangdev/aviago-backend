require('dotenv').config();
const {HTTP_PORT = 3000} = process.env;
const express = require('express');
const morgan = require('morgan');

const app = express();
const router = require('./router');

app.use(express.json());
app.use(morgan());
app.use('/api/v1', router);

app.listen(HTTP_PORT, () => console.log('Running on port', HTTP_PORT));