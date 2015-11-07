import React from 'react'

class ShowSteps extends React.Component {

	render(){

		let steps = this.props.steps.map(function(step){
			if(step === undefined){
				return ''
			} else {
				return <li>{step.instruction} <br />Timer: {step.timer}</li>
			}
		})

		return (
			<div>
				<h3>Steps</h3>
				<ul>
					{steps}
				</ul>
			</div>
		)
	}
}

export default ShowSteps