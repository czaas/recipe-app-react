import React from 'react'

class ShowIngredients extends React.Component {

	render(){

		let ingredients = this.props.ingredients.map(function(ingredient){
			if(ingredient === undefined){
				return ''
			} else {
				return <tr><td>{ingredient.name}</td><td>{ingredient.qty} {ingredient.unit}</td></tr>
			}
		})

		return (
			<div>
				<h2>Ingredients</h2>
				<table>
					<tbody>
						<tr>
							<th>Name</th><th>Quantity</th>
						</tr>

						{ingredients}
					</tbody>
				</table>
			</div>
		)
	}
}

export default ShowIngredients