exports.seed = function (knex, Promise) {
	const shops = knex('shops').select('id').where('name', 'in', ['Happy Holes', 'Jolly Jellys', 'VooDoo'])
	const donuts = knex('donuts').whereIn('name', ['Maple', 'Frosted', 'Fiesta', 'Bear Claw'])
	knex('shops_to_donuts').del()
	return Promise.all([shops, donuts]).then((results) => {
			let shopIds = results[0];
			let donutIds = results[1];
			return knex('shops_to_donuts').insert([
					{
							donut_id: donutIds[1].id, shop_id: shopIds[0].id
					},
					{
							donut_id: donutIds[3].id, shop_id: shopIds[0].id
					},
					{
							donut_id: donutIds[2].id, shop_id: shopIds[1].id
					},
					{
							donut_id: donutIds[0].id, shop_id: shopIds[1].id
					},
					{
							donut_id: donutIds[2].id, shop_id: shopIds[0].id
					},
			]);
	});
};