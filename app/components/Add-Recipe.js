import React from 'react'

import RecipeStore from './Stores/RecipeStore'

import StepForm from './RecipeForm/Step.js'
import IngredientForm from './RecipeForm/Ingredient.js'
import ShowSteps from './RecipeForm/ShowSteps.js'
import ShowIngredients from './RecipeForm/ShowIngredients.js'

class AddRecipe extends React.Component {

	constructor(){
		super()
		this.state = {
			currentRecipe: RecipeStore.getCurrentRecipe(),
			optionsForSelectDropdown: RecipeStore.getUnits()
		}

		this.handleStep = this.handleStep.bind(this)
		this.handleIngredient = this.handleIngredient.bind(this)
	}

	handleStep(step){
		this.state.currentRecipe.steps.push(step)
		this.setState({
			currentRecipe: this.state.currentRecipe
		})
	}

	handleIngredient(ingredient){
		this.state.currentRecipe.ingredients.push(ingredient)

		this.setState({
			currentRecipe: this.state.currentRecipe
		})
	}

	render(){
		return (
			<div>
				<h2>From the Add Recipe Component!</h2>
				<StepForm handleStep={this.handleStep} />
				<IngredientForm handleIngredient={this.handleIngredient} unitOptions={this.state.optionsForSelectDropdown} />

				<ShowSteps steps={this.state.currentRecipe.steps} />
				<ShowIngredients ingredients={this.state.currentRecipe.ingredients} />
			</div>
		)
	}
}

export default AddRecipe