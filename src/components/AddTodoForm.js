// AddTodoForm.js
import React from 'react'

export default class AddTodoForm extends React.Component {
	constructor(props) {
		super(props);
		this.state = {
			todo: ''
		}
		this.handleOnChange = this.handleOnChange.bind(this)
		this.handleFormSubmit = this.handleFormSubmit.bind(this)
	}

	handleOnChange(evt) {
		const todo = evt.target.value
		this.setState(() => ({
			todo: todo
		}))
	}

	handleFormSubmit(evt) {
		evt.preventDefault()
		this.setState(() => ({
			todo: ''
		}))
		this.props.addNewTodo(this.state.todo)
	}

	render() {
		return (
			<form>
				<input
					type='text'
					name='todo'
					onChange={this.handleOnChange}
					value={this.state.todo}
				/>
				<button onClick={this.handleFormSubmit}>+</button>
			</form>
		);
	}
}