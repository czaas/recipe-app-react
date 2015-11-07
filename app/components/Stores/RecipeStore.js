import _ from 'lodash'
import $ from 'jquery'

const RecipeStore = {
	UnitsOfMessurement: ['tsp', 'tbsp', 'fl oz', 'cup', 'pint', 'quart', 'gal', 'mL', 'liter', 'lbs', 'oz', 'grams', 'kg'],

	AllRecipes: [],

	getRecipes(){

		// should reach out to mongo db then save all recipes in the this.AllRecipes Array
		
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
	},

	SaveRecipe(recipe){

		$.ajax('/api/add-recipe', {
			data: JSON.stringify(recipe),
			contentType: 'application/json',
			type: 'POST'
		}).success((data)=> console.log(data)).
		fail((err)=> console.error(err))
	}
}
export default RecipeStore