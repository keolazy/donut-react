
exports.seed = function(knex, Promise) {
	const shops = knex('shops').select('id').where('name', 'in', ['Voodoo', 'Sans'])
	const donuts = knex('donuts').whereIn('name', ['Maple', 'Frosted', 'Fiesta', 'Bear Claw'])
	return knex('employees').del()
		.then(function () {
			return knex('employees').insert([
				{first_name:'Nathan', last_name:'Keolasy', email:'nathanK@hotmail.com',
					password:'beavers', favorite_donut:1, shop_id: 4},
				{first_name:'Kevin', last_name:'Spacey', email:'KevSpacey@earthlink.net',
					password:'gophers', favorite_donut:2, shop_id: 4},
				{first_name:'Hope', last_name:'Full', email:'hope.bliss@hotmail.com',
					password:'giraffes', favorite_donut:3, shop_id: 5},
				{first_name:'William', last_name:'Son', email:'damnSon@gmail.com',
					password:'unicorns', favorite_donut:4, shop_id: 5},
				{first_name:'Thuy', last_name:'Hoang', email:'thuythuy@yahoo.com',
					password:'rhinos', favorite_donut: 5, shop_id: 6},
			])
		})
}
