import React from 'react'
import $ from 'jquery'

import RecipeStore from './Stores/RecipeStore'

import RecipeNameForm from './RecipeForm/RecipeName.js'
import StepForm from './RecipeForm/Step.js'
import IngredientForm from './RecipeForm/Ingredient.js'

import ShowRecipe from './RecipeForm/ShowRecipe.js'

class AddRecipe extends React.Component {

	constructor(){
		super()
		this.state = {
			currentRecipe: RecipeStore.getCurrentRecipe(),
			optionsForSelectDropdown: RecipeStore.getUnits()
		}

		this.handleRecipeName = this.handleRecipeName.bind(this)
		this.handleStep = this.handleStep.bind(this)
		this.handleIngredient = this.handleIngredient.bind(this)
		this.handleSaveRecipe = this.handleSaveRecipe.bind(this)
	}

	handleRecipeName(name){
		this.state.currentRecipe.name = name

		this.setState({
			currentRecipe: this.state.currentRecipe
		})
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

	handleSaveRecipe(e){
		e.preventDefault()

		$.ajax('/api/add-recipe', {
			data: JSON.stringify(this.state.currentRecipe),
			contentType: 'application/json',
			type: 'POST'
		}).success((data)=> {
			//router.transitionTo('/')
			console.log(this.props.history)
			this.props.history.pushState(null, '/')
		}).fail((err)=> console.error(err))
	}

	render(){
		return (
			<div>
				<h2>Add a Recipe</h2>

				<RecipeNameForm addRecipeName={this.handleRecipeName} />
				<StepForm handleStep={this.handleStep} />
				<IngredientForm handleIngredient={this.handleIngredient} unitOptions={this.state.optionsForSelectDropdown} />

				<ShowRecipe 
					name={this.state.currentRecipe.name}
					steps={this.state.currentRecipe.steps} 
					ingredients={this.state.currentRecipe.ingredients} />

				<button onClick={this.handleSaveRecipe}>Save Recipe</button>
			</div>
		)
	}
}

export default AddRecipe