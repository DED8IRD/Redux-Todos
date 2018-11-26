// TodoList.js
import React from 'react';
import Todo from './Todo'

const TodoList = (props) => {
  return (
  	<ul>
  		{props.todos.map((todo, idx) => (
  			<Todo 
  				key={idx} 
  				{...todo} 
  				onClick={() => props.onTodoClick(idx)} 
  			/>
  		))}
  	</ul>
  )
}

export default TodoList;