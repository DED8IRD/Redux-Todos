import React from 'react';
import ReactDOM from 'react-dom';
import App from './components/App';
import * as serviceWorker from './serviceWorker';
import {createStore} from 'redux'
import {Provider} from 'react-redux'
import reducer from './reducers'
import {
	addTodo,
	toggleTodo,
	setVisibilityFilter,
	VisibilityFilters
} from './actions'

const store = createStore(reducer)
// log the initial state
console.log(store.getState())

// log every state change
// note: subscribe() returns a function for unregistering the listener
// (similar to setInterval() returning id for clearInterval())
const unsubscribe = store.subscribe(() => console.log(store.getState()))

// dispatch actions 
store.dispatch(addTodo('wash cat'))
store.dispatch(addTodo('butter plates'))
store.dispatch(addTodo('terrorize neighbor'))
store.dispatch(toggleTodo('wash cat'))
store.dispatch(toggleTodo('butter plates'))
store.dispatch(setVisibilityFilter(VisibilityFilters.SHOW_COMPLETED))

// stop listening to state updates 
unsubscribe()

const app = (
	<Provider store={store}>
		<App />
	</Provider>
)

ReactDOM.render(app, 
	document.getElementById('root'));

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: http://bit.ly/CRA-PWA
serviceWorker.unregister();
