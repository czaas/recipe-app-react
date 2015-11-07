import React from 'react'

import ShowSteps from './ShowSteps.js'
import ShowIngredients from './ShowIngredients.js'

class ShowRecipe extends React.Component {
	render(){
		return (
			<div>
				<h2>Recipe Name: {this.props.name}</h2>
				<ShowSteps steps={this.props.steps} />
				<ShowIngredients ingredients={this.props.ingredients} />
			</div>
		)
	}
}

export default ShowRecipe