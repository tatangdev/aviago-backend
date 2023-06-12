require('dotenv').config();
const express = require('express');
const morgan = require('morgan');
const {HTTP_PORT = 3000} = process.env;

const app = express();
const router = require('./router');

app.use(express.json());
app.use(morgan('dev'));
app.use('/api/v1', router);

// 404 not found
app.use((req, res) => {
    return res.status(404).json({
        status: false,
        message: 'Not Found',
        err: `Cannot find ${req.url}`,
        data: null,
    });
});

// 500 internal server error
app.use((err, req, res) => {
    console.log(err);
    return res.status(500).json({
        status: false,
        message: 'Internal Server Error',
        err: err.message,
        data: null,
    });
});

app.listen(HTTP_PORT, () => console.log('Running on port', HTTP_PORT));
