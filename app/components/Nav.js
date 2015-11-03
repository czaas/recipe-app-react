import React from 'react'
import { Link } from 'react-router'

class Nav extends React.Component {

	render(){
		return (
			<div>
				<nav>
					<Link to="/">All Recipes</Link> 
					<Link to="/add-recipe">Add Recipe</Link>
					<Link to="/login">Login</Link>
					<Link to="/sign-up">Sign Up</Link>
				</nav>
			</div>
		)
	}
}

export default Nav