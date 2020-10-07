import React, { useState, useEffect } from 'react';
import { Form } from 'react-bootstrap';

export default function Insert({ setDisplay }) {
    const [formValue, setFormValue] = useState({
        i1: '', i2: '', i3: '', i4: ''
    })
    const formValue_keys = Object.keys(formValue)
    let update = ''
    formValue_keys.forEach(iter => {
        update += formValue[iter]
    })
    const handleChange = (event) => {
        const pattern = /^([0-9]|\.)$|^$/
        const {name, value} = event.target
        if (value.match(pattern)) {
            setFormValue(prev => ({
                ...prev,
                [name]: value,
            }))
        }
    }
    useEffect(() => {
        setDisplay(update)
    },[update, setDisplay])

    const form = (key, index) => (
        <Form.Control key={key}
            className="insert-box"
            placeholder={index + 1}
            name={`${key}`}
            as={'input'}
            value={formValue[key]}
            onChange={handleChange}
        /> 
    )
    console.log(formValue)

    return (
        <div className="insert-area">
            { formValue_keys.map((v,i) => form(v,i)) }
        </div>
    );
}