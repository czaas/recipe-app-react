import React from 'react'
import ReactDom from 'react-dom'
import createBrowserHistory from 'history/lib/createBrowserHistory'
import { Router, Route, IndexRoute } from 'react-router'

import Nav from './Nav'
import NotFound from './Not-Found'
import Index from './Index'
import AddRecipe from './Add-Recipe'

const App = React.createClass({

	render(){
		return (
			<div>
				<Nav />
				<div>
					{this.props.children}
				</div>
			</div>
		)
	}
})

ReactDom.render((
	<Router history={createBrowserHistory()}>
		<Route path="/" component={App}>
			<IndexRoute component={Index} />
			<Route path="/add-recipe" component={AddRecipe} />
			<Route path="*" component={NotFound} />
		</Route>
	</Router>
	), document.getElementById('app')
)

