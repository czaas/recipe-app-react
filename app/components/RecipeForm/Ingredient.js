import React from 'react'

class Ingredient extends React.Component {

	constructor(){
		super()
		this.handleIngredients = this.handleIngredients.bind(this)
	}

	handleIngredients(e){
		e.preventDefault()
		
		let ingredient = {
			name: this.refs.name.value,
			qty: this.refs.qty.value,
			unit: this.refs.unit.value
		}

		this.props.handleIngredient(ingredient) // passing the ingredient up to the parent component

		this.refs.ingredientForm.reset()

	}

	render(){
		let options = this.props.unitOptions.map(function(option){

			return <option value={option}>{option}</option>
		})

		return (
			<form onSubmit={this.handleIngredients} ref="ingredientForm">
				<input type="text" placeholder="Add New Ingredient" ref="name" />
				<input type="text" placeholder="Ingredient Quantity" ref="qty" />
				<select ref="unit">
					{options}
				</select>
				<button>Add Ingredient</button>
			</form>
		)
	}
}

export default Ingredient