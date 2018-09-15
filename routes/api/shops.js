const express = require('express')
const router = express.Router()

const db = require('../../database')

// shop index
router.get('/', function(req, res) {
	db.select()
		.from('shops')
		.orderBy('id')
		.then(function(data) {
			res.send([data])
		})
})

// shop show page
// router.get('/:id', (req, res) =>
// 	db('shops')
// 		.where({id: req.params.id })
// 		.first()
// 		.then(function(data) {
// 			res.send(data)
// 		})
// )

// // shop edit page
// router.get('/:id/edit', (req, res) =>
// 	db('shops')
// 		.where({id: req.params.id })
// 		.first()
// 		.then(function(data) {
// 			res.send(data)
// 		})
// )


// router.post('/', (req, res) => {
// 	db.insert(req.body)
// 		.returning('*')
// 		.into('shops')
// 		.then((data) => {
// 			res.send(data)
// 		})
// })



// // PATCH only modifies the one we submit in the body.
// router.patch('/:id', function(req, res) {
// 	db('shops')
// 		.where({ id: req.params.id })
// 		.update(req.body)
// 		.returning('*')
// 		.then(function(data) {
// 			res.send(data)
// 		})
// })


// // PUT should replace everything with whats in body + replacing the rest with null.
// router.put('/:id', function(req,res) {
// 	db('shops')
// 		.where({ id: req.params.id })
// 		.update({
// 			email: req.body.email || null,
// 			hashed_pw: req.body.hashed_pw || null,
// 			name: req.body.name || null,
// 			phone: req.body.phone || null,
// 			balanceHours: req.body.balanceHours || null,
// 			qualifierHours: req.body.qualifierHours || null,
// 			access: req.body.access || null 
// 		})
// 		.returning('*')
// 		.then(function(data) {
// 			res.send(data)
// 		})
// })

// router.delete('/:id', function(req,res) {
// 	db('shops')
// 		.where({ id: req.params.id })
// 		.first()
// 		.del()
// 		.then(result => {
// 			res.json({ success: true })
// 		})
// })



module.exports = router

