import React from 'react'
import { Link } from 'react-router'

class RecipeFeed extends React.Component {
	render(){
		let recipes = this.props.recipes.map((recipe)=> {
			return <div>{recipe.name}</div>
		})

		return (
			<div>
				{recipes}
			</div>
		)
	}	
}

export default RecipeFeed