import React from 'react';

export default function TextareaCustom ({ title , id ,clases , placeholder }) {
	return (
		<div className="form-floating">
			<textarea className={`form-control ${clases}`} rows="5" placeholder={placeholder} id={id} style={{height:'180px'}}></textarea>
			<label htmlFor="floatingTextarea2">{ title }</label>
		</div>
	)
}