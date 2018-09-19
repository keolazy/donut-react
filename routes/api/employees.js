const express = require('express')
const router = express.Router()

const db = require('../../database')

// shop_id vs employee_id
// // shop employee index page - "/shops/1/employees"
// employes index page
router.get('/:id/employees', (req, res) => {
	db('employees')
	.where({shop_id: req.params.id })
	.orderBy('id')
	.then((data) => {
		res.send(data);
	})
})

// // shop employee show page
// router.get('/:id', (req, res) => {
// 	db('employees')
// 		.where( {id: req.params.id })
// 		.first()
// 		.then(data => {
// 			res.send(data)
// 		})
// 	})

// // shop employee edit page
// router.get('/:id', (req, res) => {
// 	db('employees')
// 	.where( {id: req.params.id })
// 	.first()
// 	.then((data) => {
// 		res.send(data)
// 	})
// })

// // shop employee update
// router.patch('/:id', (req, res) => {
// 	db('employees')
// 		.where({ id: req.params.id })
// 		.update(req.body)
// 		.returning('*')
// 		.then(function(data) {
// 			res.send(data)
// 		})
// })

// // shop employee new page
// router.get('/', function(req, res) {
// 	db.select()
// 		.from('employees')
// 		.orderBy('id')
// 		.then(function(data) {
// 			res.send([data])
// 		})
// })

// // shop employee create
// router.post('/', (req, res) => {
// 	db.insert(req.body)
// 		.returning('*')
// 		.into('employees')
// 		.then((data) => {
// 			res.send(data)
// 		})
// })


// module.exports = router;