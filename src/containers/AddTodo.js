// AddTodo.js
import React from 'react'
import {connect} from 'react-redux'
import {addTodo} from '../actions'
import AddTodoForm from '../components/AddTodoForm'

const mapStateToProps = (state) => ({
	todos: state
})

const mapDispatchToProps = (dispatch) => ({
	addNewTodo: (todo) => dispatch(addTodo(todo))
})

const AddTodo = connect(mapStateToProps, mapDispatchToProps)(AddTodoForm)
export default AddTodo