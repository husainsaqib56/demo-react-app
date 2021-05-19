import React, { Component } from 'react'

class EventBind extends Component {
	constructor(props) {
		super(props)

		this.state = {
			message: 'Hello'
		}

		// this.changeMessageHandler = this.changeMessageHandler.bind(this)
	}

	changeMessageHandler = () => {
		this.setState({
			message: 'GoodBye'
		})
		console.log(this)
	}

	render() {
		return (
			<div>
				<div>{this.state.message}</div>
				{/* <button onClick={this.changeMessageHandler.bind(this)}>Click</button> */}
				{/* <button onClick={() => { this.changeMessageHandler() }}>Click</button> */}
				{/* Official Approach followed by React */}
				<button onClick={this.changeMessageHandler}>Click</button>
			</div>
		)
	}
}

export default EventBind
