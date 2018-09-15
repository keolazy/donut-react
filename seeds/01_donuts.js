
exports.seed = function(knex, Promise) {
	// Ensures ALL existing tables are deleted before seed population.
	return Promise.all([
		knex('shops_to_donuts').del(),
		knex('employees').del(),
		knex('shops').del(),
		knex('donuts').del()
	])
		.then(function () {
			return knex('donuts').insert([
				{name: 'Maple', topping:'Syrup', price:2},
				{name: 'Frosted', topping:'Chocolate', price:5},
				{name: 'Fiesta', topping:'Sprinkles', price:3},
				{name: 'Bear Claw', topping:'cinnamon', price:8},
			])
		})
}
