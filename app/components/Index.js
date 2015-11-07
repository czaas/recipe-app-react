import React from 'react'
import $ from 'jquery'

import RecipeStore from './Stores/RecipeStore.js'
import RecipeFeed from './RecipeFeed.js'

class Index extends React.Component {

	constructor(){
		super()

		this.state = {
			recipes: []
		}
	}

	componentDidMount(){
		$.get('/api/get-recipes', (data) => {
			return data
		}).success((data)=>{
			this.setState({
				recipes: data
			})
		})
	}

	render(){
		return (
			<div>
				<h1>All Recipes</h1>
				<RecipeFeed recipes={this.state.recipes} />
			</div>
		)
	}
}

export default Index