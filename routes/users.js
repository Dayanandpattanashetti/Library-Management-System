const express = require('express');
const router = express.Router();

router.get('/', (req, res, next) => {
    res.send('users page')
})

module.exports = router;