import React from 'react'

import RecipeStore from './Stores/RecipeStore'

import StepForm from './RecipeForm/Step.js'
import IngredientForm from './RecipeForm/Ingredient.js'
import ShowSteps from './RecipeForm/ShowSteps.js'

class AddRecipe extends React.Component {

	constructor(){
		super()
		this.state = {
			currentRecipe: RecipeStore.getCurrentRecipe(),
			optionsForSelectDropdown: RecipeStore.getUnits()
		}
	}

	handleStep(step){
		console.log(step)
	}

	handleIngredient(ingredient){
		console.log(ingredient)
	}

	render(){
		return (
			<div>
				<h2>From the Add Recipe Component!</h2>
				<StepForm handleStep={this.handleStep} />
				<IngredientForm handleIngredient={this.handleIngredient} unitOptions={this.state.optionsForSelectDropdown} />

				<ShowSteps steps={[{name: 'test', timer: 3 }]} />
			</div>
		)
	}
}

export default AddRecipe