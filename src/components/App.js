import React from 'react';
import Filters from './Filters'
import AddTodo from '../containers/AddTodo'
import VisibleTodoList from '../containers/VisibleTodoList'

export default class App extends React.Component {
	constructor(props) {
		super(props);
	}

	render() {
		return (
			<div>
				<AddTodo />
				<VisibleTodoList />
				<Filters />
			</div>
		);
	}
}
