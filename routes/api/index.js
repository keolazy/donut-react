const express = require('express')
const router = express.Router()
const shops = require('./shops')
// const employees = require('./employees');

router.use('/shops', shops)

// const shop_id = req.params.shop_id;
// router.use('/shops/:shop_id/employees', employees)


module.exports = router