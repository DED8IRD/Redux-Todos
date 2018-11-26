// VisibleTodoList.js
import { connect } from 'react-redux'
import { 
	VisibilityFilters,
	toggleTodo 
} from '../actions'
import TodoList from '../components/TodoList'

const { SHOW_ALL, SHOW_ACTIVE, SHOW_COMPLETED } = VisibilityFilters

const getVisibleTodos = (todos, filter) => {
	switch (filter) {
		case SHOW_ACTIVE:
			return todos.filter((todo) => !todo.completed)
		case SHOW_COMPLETED:
			return todos.filter((todo) => todo.completed)
		case SHOW_ALL:
		default:
			return todos
	}
}

const mapStateToProps = (state) => ({
	todos: getVisibleTodos(state.todos, state.visibilityFilter)
})

const mapDispatchToProps = (dispatch) => ({
	onTodoClick: (idx) => {
		dispatch(toggleTodo(idx))
	} 
})

const VisibleTodoList = connect(
	mapStateToProps,
	mapDispatchToProps
)(TodoList)

export default VisibleTodoList 
