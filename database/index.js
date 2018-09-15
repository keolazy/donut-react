// database config is also located in /clients/db
const knex = require('knex')(process.env.NODE_ENV !== 'production' ? {
	client: 'pg',
	connection: {
		host: 'localhost',
		database: 'donut_knex'
	}
} : {
	client: 'pg', connection: process.env.DATABASE_URL, searchPath: ['public']
}
)

module.exports = knex

