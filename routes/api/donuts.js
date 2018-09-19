const express = require('express')
const router = express.Router()

const db = require('../../database')

// donut index - GET
router.get('/', function(req, res) {
	db.select()
		.from('donuts')
		.orderBy('id')
		.then(function(data) {
			res.send(data)
		})
})

module.exports = router;