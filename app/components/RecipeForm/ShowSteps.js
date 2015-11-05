import React from 'react'

class ShowSteps extends React.Component {

	render(){

		let steps = this.props.steps.map(function(step){
			return <li>{step.name} <br />Timer: {step.timer}</li>
		})

		return (
			<ul>
				{steps}
			</ul>
		)
	}
}

export default ShowSteps