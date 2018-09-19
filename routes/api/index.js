const express = require('express')
const router = express.Router()
const shops = require('./shops')
const donuts = require('./donuts')

router.use('/shops', shops)
router.use('/donuts', donuts)

module.exports = router