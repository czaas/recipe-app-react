import React from 'react'

class RecipeName extends React.Component {

	constructor(){
		super()
		this.handleAddName = this.handleAddName.bind(this)
	}

	handleAddName(e){
		e.preventDefault()

		this.props.addRecipeName(this.refs.recipeName.value)

		this.refs.recipeNameForm.reset()
	}

	render(){
		return (
			<form onSubmit={this.handleAddName} ref="recipeNameForm">
				<input type="text" placeholder="Recipe Name" ref="recipeName" />
				<button>Add Recipe Name</button>
			</form>
		)
	}
}

export default RecipeName