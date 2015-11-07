var express = require('express'),
	mongoose = require('mongoose'),
	path = require('path'),
	cors = require('cors'),
	bodyParser = require('body-parser'),
	db = mongoose.connection,
	app = express();

app.use(express.static('public'));

app.use(cors());
app.use(bodyParser.json({extended: true}));

mongoose.connect('localhost:27017/recipeApp2');

db.on('error', console.error.bind(console, 'connection error:'));


var api = require('./recipe-api.js');

app.get('/api/get-recipes', api.allRecipes);
app.post('/api/add-recipe', api.addRecipe);
app.get('/api/single-recipe', api.getRecipe);
app.put('/api/update-recipe', api.updateRecipe);
app.delete('/api/remove-recipe', api.removeRecipe);

app.get('*', function (request, response){
  response.sendFile(path.resolve(__dirname, 'public', 'index.html'))
});


var server = app.listen(3000, function(){
	var host = server.address().address;
	var port = server.address().port;

	console.log('Server: ', host, port);
});