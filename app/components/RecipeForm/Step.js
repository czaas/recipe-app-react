import React from 'react'

class Step extends React.Component {

	constructor(){
		super()
		this.handleStep = this.handleStep.bind(this)
	}

	handleStep(e){
		e.preventDefault()
		
		let newStep = {
			instruction: this.refs.instruction.value,
			timer: (this.refs.timer.value ? this.refs.timer.value : null)
		}

		this.refs.stepForm.reset()

		this.props.handleStep(newStep)
	}

	render(){
		return (
			<form onSubmit={this.handleStep} ref="stepForm">
				<input type="text" placeholder="Add Step" ref="instruction" />
				<input type="number" placeholder="Add Timer for step (optional)" ref="timer" min="0" />
				<button>Add Step</button>
			</form>
		)
	}
}

export default Step