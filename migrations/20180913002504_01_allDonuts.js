exports.up = function (knex, Promise) {
	// shops table is independent of the other tables and highest in hierachy and importance. Conversely, shops_to_donuts dependent on the rest.
	return createShops()
		.then(createDonuts)
		.then(createEmployees)
		.then(createShopsToDonuts)

	function createShops() {
		return knex.schema.createTable('shops', function (table) {
			table.increments()
			table.string('name')
			table.string('city')
		})
	}

	function createDonuts() {
		return knex.schema.createTable('donuts', function (table) {
			table.increments()
			table.string('name')
			table.string('topping')
			table.integer('price')
		})
	}
	
	function createEmployees() {
		return knex.schema.createTable('employees', function (table) {
			table.increments()
			table.string('first_name')
			table.string('last_name')
			table.string('email')
			table.string('password')
      
			table.integer('favorite_donut')
			table.foreign('favorite_donut').references('donuts.id').onDelete('CASCADE')
      
			table.integer('shop_id')
			table.foreign('shop_id').references('shops.id').onDelete('CASCADE')
      
		})
	}

	function createShopsToDonuts() {
		return knex.schema.createTable('shops_to_donuts', function (table) {
			table.increments()
			table.integer('shop_id')
			table.foreign('shop_id').references('shops.id').onDelete('CASCADE')
			table.integer('donut_id')
			table.foreign('donut_id').references('donuts.id').onDelete('CASCADE')
		})
	}
}

exports.down = function (knex, Promise) {
	return Promise.all([
		knex.schema.dropTable('shops'),
		knex.schema.dropTable('employees'),
		knex.schema.dropTable('donuts'),
		knex.schema.dropTable('shops_to_donuts')
	])
}
