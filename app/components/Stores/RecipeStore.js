import _ from 'lodash'

const RecipeStore = {
	UnitsOfMessurement: ['tsp', 'tbsp', 'fl oz', 'cup', 'pint', 'quart', 'gal', 'mL', 'liter', 'lbs', 'oz', 'grams', 'kg'],

	AllRecipes: [{
		name: 'Test Recipe', 
		steps: [{instruction: 'These are the instructions', timer: 5}, {instruction: 'Step number 2!', timer: null}],
		ingredients: [{name: 'Carrots', qty: 3, unit: 'cups'}],
		author: 'userId',
		_id: '8901X'
	}],

	getRecipes(){
		// should reach out to mongo db then save all recipes in the this.AllRecipes Array
		return this.AllRecipes
	},

	getUnits(){
		return this.UnitsOfMessurement
	},

	getCurrentRecipe(recipeId){
		// recipeId is optional. If it's a new recipe no recipeId will be passed
		if(!recipeId){
			return {
				name: '',
				steps: [],
				ingredients: [],
				author: ''
			}
		} else {
			_.find(this.AllRecipes, recipeId)
		}
	},

	addStepToRecipe(step){
		_.uniq()
	}
}
export default RecipeStore