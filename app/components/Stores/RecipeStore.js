import _ from 'lodash'
import $ from 'jquery'

const RecipeStore = {
	UnitsOfMessurement: ['tsp', 'tbsp', 'fl oz', 'cup', 'pint', 'quart', 'gal', 'mL', 'liter', 'lbs', 'oz', 'grams', 'kg'],

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

		
	}
}
export default RecipeStore