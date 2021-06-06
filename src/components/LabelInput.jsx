import React from 'react';

export default function LabelInput ({ type , clases , placeholder , title , id }) {
	return (
		<>
			<div className="form-floating mb-3">
			  <input type={type} className={`form-control ${clases}`} id={id} placeholder={placeholder} />
			  <label htmlFor={title}>{title}</label>
			</div>
		</>
	)
}