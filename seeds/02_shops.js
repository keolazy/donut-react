exports.seed = function(knex, Promise) {
	return knex('shops').del()
		.then(() => {
			return knex('shops').insert([
				{
					name: 'Happy Holes',
					city: 'austin'
				},
				{
					name: 'Jolly Jellys',
					city: 'san antonio'
				},
				{
					name: 'VooDoo',
					city: 'austin'
				}
			])
		})
};


