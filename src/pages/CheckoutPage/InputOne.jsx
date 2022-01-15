import React from 'react'

const InputOne = ({placeholder, validate, val, change, problemText}) => {
	return (
		<div className="col">
			<input autoComplete="off" value={val} onChange={(e) => change(e)} placeholder={placeholder} className={validate ? "form-control" : "form-control is-invalid"} />
			<div className="invalid-feedback">{problemText}</div>
		</div>
	)
}

export default InputOne
