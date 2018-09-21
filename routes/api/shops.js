const express = require('express')
const router = express.Router()

const db = require('../../database')

// Put employee middleware here OR just 
// hard code the routes in this js file.
// const employees = require('./employees');
// router.use('/:id/employees', employees);

// shop index - GET /shops
router.get('/', function(req, res) {
	db.select()
		.from('shops')
		.orderBy('id')
		.then(function(data) {
			res.send(data)
		})
})



// shop show page - GET /shops/1
router.get('/:id', (req, res) =>
	db('shops')
		.where({id: req.params.id })
		.first()
		.then(function(data) {
			res.send(data)
		})
)

// shop employee show page - GET /shops/1/employees
router.get('/:id/employees/:e_id', (req, res) => {
	db('employees')
	.where({ shop_id: req.params.id, id: req.params.e_id})
	.first()
	.then((data) => {
		res.send(data);
	})
})

// shop employees index page - GET /shops/1/employees
router.get('/:id/employees', (req, res) => {
	db('employees')
	.where({shop_id: req.params.id })
	.orderBy('id')
	.then((data) => {
		res.send(data);
	})
})

// shop edit - GET /shops/1/edit - *Used toggle edit CreateEditShop instead of /edit *
router.get('/:id/edit', (req, res) =>
	db('shops')
		.where({id: req.params.id })
		.first()
		.then(function(data) {
			res.send(data)
		})
)

// shop employee edit page - *Used toggle edit CreateEditEmployee instead of /edit *
router.get('/:id/employees/:e_id/edit', (req, res) => {
	db('employees')
	.where({ shop_id: req.params.id, id: req.params.e_id})
	.first()
	.then((data) => {
		res.send(data);
	})
})

// shop update - PATCH /shops/1
router.patch('/:id', function(req, res) {
	db('shops')
		.where({ id: req.params.id })
		.update(req.body)
		.returning('*')
		.then(function(data) {
			res.send(data)
		})
})

// *** shop new page - GET /shops/new 
router.get('/new', function(req, res) {
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

// NewShop route
router.get('/new', (req, res) => {
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

// *** shop employee update
router.patch('/:id/employees/:e_id', function(req, res) {
	db('shops')
		.where({ id: req.params.e_id })
		.update(req.body)
		.returning('*')
		.then(function(data) {
			res.send(data)
		})
})


// shop employee new page
router.get('/:id/employees/', function(req, res) {
	db.select()
		.from('employees')
		.where({ id: req.params.shop_id, })
		.orderBy('id')
		.then(function(data) {
			res.send([data])
		})
})

// shop employee create
router.post('/:id/employees', (req, res) => {
	db.insert(req.body)
		.returning('*')
		.into('employees')
		.then((data) => {
			console.log("succes: ", data)
			res.send(data)
		})
})



// shop employee destroy
router.delete('/:shop_id/employees/:e_id', function(req,res) {
	db('employees')
		.where({ shop_id: req.params.shop_id, id: req.params.e_id  })
		.first()
		.del()
		.then(result => {
			res.json({ success: true })
		})
})

module.exports = router

