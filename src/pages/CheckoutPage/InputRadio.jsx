import React from 'react'

const InputRadio = ({label, onChange, id, value, check}) => {
	return (
		<div className="form-check form-check-inline mr-5">
			<input onChange={(e)=>onChange(e)} id={id} type="radio" value={value} className="form-check-input" checked={check === value ? true : false} />
			<label htmlFor={id} className="form-check-label">
				{label}
			</label>
		</div>
	)
}

export default InputRadio
