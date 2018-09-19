exports.seed = function(knex, Promise) {
	return knex('shops_to_donuts').del()
		.then(function() {
			return knex('shops_to_donuts').insert([
				{
					id: 1,
					shop_id: 1,
					donut_id: 1
				},
				{
					id: 2,
					shop_id: 1,
					donut_id: 2
				},
				{
					id: 3,
					shop_id: 2,
					donut_id: 2
				},
				{
					id: 4,
					shop_id: 2,
					donut_id: 3
				},
				{
					id: 5,
					shop_id: 3,
					donut_id: 3
				},
				{
					id: 6,
					shop_id: 3,
					donut_id: 4
				},
			])
		})
}


