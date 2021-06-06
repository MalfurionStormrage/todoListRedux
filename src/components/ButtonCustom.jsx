import React from 'react';

export default function ButtonCustom ({ type , clases , title , onClick }) {
	return (
		<button type={ type } className={`text-center btn p-2 my-2 w-100 ${clases}`} onClick={onClick}> {title} </button>
	)
}