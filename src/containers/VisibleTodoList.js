// VisibleTodoList.js
import { connect } from 'react-redux'
import { toggleTodo } from '../actions'
import TodoList from '../components/TodoList'

const mapStateToProps = (state) => ({
	todos: state.todos
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
