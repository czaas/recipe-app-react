var mongoose = require('mongoose'),
	Schema = mongoose.Schema;

var recipeSchema = new Schema({
	name: String,
	steps: Array,
	ingredients: Array,
	author: Object
}, { collection: 'recipes' });

module.exports = mongoose.model('Recipe', recipeSchema);