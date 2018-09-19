
exports.seed = function(knex, Promise) {
	const shops = knex('shops').select('id').where('name', 'in', ['Happy Holes', 'Jolly Jellys', 'VooDoo'])
	const donuts = knex('donuts').whereIn('name', ['Maple', 'Frosted', 'Fiesta', 'Bear Claw'])
	knex('employees').del()

  return  Promise.all([shops, donuts]).then((results) => {
		let shopIds = results[0];
		let donutIds = results[1];
		return knex('employees').insert([
					{
						first_name:'Nathan',
						last_name:'Keolasy', email:'nathanK@hotmail.com',
						password:'beavers',
						favorite_donut: donutIds[0].id,
						shop_id: shopIds[0].id
					},
					{
						first_name:'Kevin',
						last_name:'Spacey', email:'KevSpacey@earthlink.net',
						password:'gophers',
						favorite_donut: donutIds[1].id,
						shop_id: shopIds[0].id
					},
					{
						first_name:'Hope', last_name:'Full', email:'hope.bliss@hotmail.com',
						password:'giraffes',
						favorite_donut: donutIds[1].id,
						shop_id: shopIds[1].id
					},
					{
						first_name:'William', last_name:'Son', email:'damnSon@gmail.com',
						password:'unicorns',
						favorite_donut: donutIds[2].id,
						shop_id: shopIds[1].id
					},
					{
						first_name:'Thuy', last_name:'Hong', email:'thuythuy@yahoo.com',
						password:'rhinos',
						favorite_donut: donutIds[3].id,
						shop_id: shopIds[2].id
					}
			])
		})
}
