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

// donut show page - GET
// router.get('/:id', (req, res) =>
// 	db('donuts')
// 		.where({id: req.params.id })
// 		.first()
// 		.then(function(data) {
// 			res.send(data)
// 		})
// )

// donut edit
// router.get('/:id/edit', (req, res) =>
// 	db('donuts')
// 		.where({id: req.params.id })
// 		.first()
// 		.then(function(data) {
// 			res.send(data)
// 		})
// )

// donut update
// router.patch('/:id', function(req, res) {
// 	db('douts')
// 		.where({ id: req.params.id })
// 		.update(req.body)
// 		.returning('*')
// 		.then(function(data) {
// 			res.send(data)
// 		})
// })

// donut new page
// router.get('/', function(req, res) {
// 	db.select()
// 		.from('donuts')
// 		.orderBy('id')
// 		.then(function(data) {
// 			res.send([data])
// 		})
// })

// donut destroy - DELETE
// router.delete('/:id', function(req,res) {
// 	db('donuts')
// 		.where({ id: req.params.id })
// 		.first()
// 		.del()
// 		.then(result => {
// 			res.json({ success: true })
// 		})
// })

// donut create - POST
// router.post('/', (req, res) => {
// 	db.insert(req.body)
// 		.returning('*')
// 		.into('donuts')
// 		.then((data) => {
// 			res.send(data)
// 		})
// })

module.exports = router;