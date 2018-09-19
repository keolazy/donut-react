const express = require('express')
const router = express.Router()

const db = require('../../database')

// Put employee middleware here OR just 
// hard code the routes in this js file.
// const employees = require('./employees');
// router.use('/:id/employees', employees);

// shop index
router.get('/', function(req, res) {
	db.select()
		.from('shops')
		.orderBy('id')
		.then(function(data) {
			res.send(data)
		})
})

// shop show page
router.get('/:id', (req, res) =>
	db('shops')
		.where({id: req.params.id })
		.first()
		.then(function(data) {
			res.send(data)
		})
)

// employes index page
router.get('/:id/employees', (req, res) => {
	db('employees')
	.where({shop_id: req.params.id })
	.orderBy('id')
	.then((data) => {
		res.send(data);
	})
})

// // shop edit
router.get('/:id/edit', (req, res) =>
	db('shops')
		.where({id: req.params.id })
		.first()
		.then(function(data) {
			res.send(data)
		})
)


// shop update
router.patch('/:id', function(req, res) {
	db('shops')
		.where({ id: req.params.id })
		.update(req.body)
		.returning('*')
		.then(function(data) {
			res.send(data)
		})
})

// shop new page
router.get('/', function(req, res) {
	db.select()
		.from('shops')
		.orderBy('id')
		.then(function(data) {
			res.send([data])
		})
})

// shop create
router.post('/', (req, res) => {
	db.insert(req.body)
		.returning('*')
		.into('shops')
		.then((data) => {
			res.send(data)
		})
})

// shop destroy
router.delete('/:id', function(req,res) {
	db('shops')
		.where({ id: req.params.id })
		.first()
		.del()
		.then(result => {
			res.json({ success: true })
		})
})

module.exports = router

