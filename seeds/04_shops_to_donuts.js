exports.seed = function(knex, Promise) {
	return knex('shops_to_donuts').del()
		.then(function() {
			return knex('shops_to_donuts').insert([
				{
					id: 1,
					shop_id: 16,
					donut_id: 21
				},
				{
					id: 2,
					shop_id: 16,
					donut_id: 22
				},
				{
					id: 3,
					shop_id: 16,
					donut_id: 23
				},
				{
					id: 4,
					shop_id: 16,
					donut_id: 24
				},
				{
					id: 5,
					shop_id: 17,
					donut_id: 21
				},
				{
					id: 6,
					shop_id: 17,
					donut_id: 22
				},
				{
					id: 7,
					shop_id: 17,
					donut_id: 23
				}
			])
		})
	}


