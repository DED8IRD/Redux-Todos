// reducers.js
import {combineReducers} from 'redux'
import {
	ADD_TODO,
	TOGGLE_TODO,
	SET_VISIBILITY_FILTER,
	VisibilityFilters
} from './actions'

const todos = (state=[], action) => {
	switch (action.type) {
		case ADD_TODO:
			return [...state, {text: action.text, completed: false}]
		case TOGGLE_TODO:
			return state.map((todo, idx) => (
				idx === action.idx
				? {text: todo.text, completed: !todo.completed}
				: todo
			))
		default:
			return state
	}
}

const {SHOW_ALL} = VisibilityFilters
const visibilityFilter = (state=SHOW_ALL, action) => {
	switch (action.type) {
		case SET_VISIBILITY_FILTER:
			return action.filter
		default:
			return state
	}
}

const rootReducer = combineReducers({
	todos, 
	visibilityFilter
})
export default rootReducer