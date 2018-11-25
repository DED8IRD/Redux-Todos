// TodoList.js
import React from 'react';
import Todo from './Todo'

const TodoList = ({todos, onTodoClick}) => {
  return (
  	<ul>
  		{todos.map((todo, idx) => (
  			<Todo 
  				key={idx} 
  				{...todo} 
  				onClick={() => onTodoClick(idx)} 
  			/>
  		))}
  	</ul>
  )
}

export default TodoList;