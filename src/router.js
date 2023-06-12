const express = require('express');
const router = express.Router();
const flightHandler = require('./handlers/flights');

router.get('/', (req, res) => {
    return res.status(200).json({
        status: true,
        message: 'welcome to aviago api!',
        err: null,
        data: null
    });
});

router.post('/flight/search/oneway', flightHandler.oneWay);

module.exports = router;