import React from 'react';
import Filters from './Filters'
import VisibleTodoList from '../containers/VisibleTodoList'

export default class App extends React.Component {
	constructor(props) {
		super(props);
	}

	render() {
		return (
			<div>
				<VisibleTodoList />
				<Filters />
			</div>
		);
	}
}
