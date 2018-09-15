// my config from q2
require('dotenv').config()

module.exports = {
	development: {
		client: 'postgresql',
		connection: {
			database: 'donut_knex',
			user: 'postgres',
			password: 'nathanK'
		}
	},

	test: {
		client: 'postgresql',
		connection: {
			database: 'donut_knex'
		}
	},

	production: {
		client: 'pg',
		connection: process.env.DATABASE_URL + '?ssl=true'
	}
}
