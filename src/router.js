const express = require('express');
const router = express.Router();

router.get('/', (req, res) => {
    return res.status(200).json({
        status: true,
        message: 'welcome to aviago api!',
        err: null,
        data: null
    });
});

module.exports = router;