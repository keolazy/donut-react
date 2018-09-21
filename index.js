// Equivalent to "server.js"
const express = require('express')
const bodyParser = require('body-parser')
const apiRoute = require('./routes/api/index.js')
const cors = require('cors');

const app = express()


app.use(bodyParser.json())
app.use(bodyParser.urlencoded({
	extended: true
}))

app.use('/api', apiRoute)

if (process.env.NODE_ENV === 'production') {
	app.use(express.static('client/build'))

	const path = require('path')
	app.get('*', function (req, res) {
		res.sendFile(path.resolve(__dirname, 'client', 'build', 'index.html'))
	})
}

// ENABLE CORs to remove Access-Control-Allow-Origin problem
let allowCrossDomain = function(req, res, next) {
	res.header('Access-Control-Allow-Origin', "*");
	res.header('Access-Control-Allow-Methods', 'GET,PUT,POST,DELETE');
	res.header('Access-Control-Allow-Headers', 'Content-Type');
	next();
}

app.use(cors());

// app.configure(function() {
// 	app.use(allowCrossDomain);
// 	//some other code
// });  

app.use(function(req, res, next) {
  res.header("Access-Control-Allow-Origin", "*");
  res.header("Access-Control-Allow-Headers", "Origin, X-Requested-With, Content-Type, Accept");
  next();
});

app.get('/', function(req, res, next) {
  // Handle the get for this route
});

app.post('/', function(req, res, next) {
 // Handle the post for this route
});

// const PORT = process.env.PORT || 8000
const PORT = 8000
app.listen(PORT)
console.log('Nathans nodemon server is listening on http://localhost:8000. \n The react app should be built and served at http://localhost:3000.')
