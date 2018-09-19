const express = require('express')
const router = express.Router()
const shops = require('./shops')

router.use('/shops', shops)

module.exports = router