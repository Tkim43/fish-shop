import React from 'react'

export default ({size = 's12', label, autoComplete="off" ,type="text", input, meta: {touched, error} }) =>{
    return (
        <div className={`col ${size}`}>
            <input id ={input.name} {...input} type ={type} autoComplete={autoComplete} />
            <label htmlFor ={input.name}>{label}</label>
            <div className="input-error red-text text-darken-2">{touched && error}</div>
        </div>
    )
}