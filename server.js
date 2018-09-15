const express = require('express')
const bodyParser = require('body-parser')
const apiRoute = require('./routes/api/index.js')

const app = express()
app.use(bodyParser.json())
app.use(bodyParser.urlencoded({
	extended: true
}))

// const cors = require('cors')
// require('dotenv').config()

// app.use(cors())
app.use('/api', apiRoute)

if (process.env.NODE_ENV === 'production') {
	app.use(express.static('client/build'))

	const path = require('path')
	app.get('*', function (req, res) {
		res.sendFile(path.resolve(__dirname, 'client', 'build', 'index.html'))
	})
}


const PORT = process.env.PORT || 3001
app.listen(PORT)
console.log('Nathans nodemon server is listening on http://localhost:3001. \n The react app should be built and served at http://localhost:3000.')
