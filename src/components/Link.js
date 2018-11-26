// Link.js
import React from 'react';

const Link = (props) => {
  if (props.active) {
	  return (
	    <span>{props.children}</span>
	  )
  } 
  return (
  	<a 
  		href=""
  		onClick={(evt) => {
  			evt.preventDefault()
  			props.onClick()
  		}}
		>
			{props.children}
		</a>
  )
}

export default Link;