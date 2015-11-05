const RecipeStore = {
	UnitsOfMessurement: ['tsp', 'tbsp', 'fl oz', 'cup', 'pint', 'quart', 'gal', 'mL', 'liter', 'lbs', 'oz', 'gram', 'kg'],

	getUnits(){
		return this.UnitsOfMessurement
	},

	getCurrentRecipe(recipeId){
		// recipeId is optional. If it's a new recipe no recipeId will be passed
		if(!recipeId){
			return {}
		}
	}
}
export default RecipeStore