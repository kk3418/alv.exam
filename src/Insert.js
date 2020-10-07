import React, { useState, useEffect } from 'react';
import { Form } from 'react-bootstrap';

export default function Insert({ setDisplay }) {
    const [formValue, setFormValue] = useState({
        i1: '', i2: '', i3: '', i4: ''
    })
    const handleChange = (event) => {
        const {name, value} = event.target
        setFormValue(prev => ({
            ...prev,
            [name]: value,
        }))
    }
    const { i1, i2, i3, i4} = formValue;
    useEffect(() => {
        setDisplay(i1+i2+i3+i4);
    }, [i1, i2, i3, i4, setDisplay]);

    return (
        <div className="insert-area">
            <Form.Control className="insert-box"
                placeholder='1'
                name='i1'
                as={'input'}
                value={formValue[0]}
                onChange={handleChange}
            /> 
            <Form.Control className="insert-box"
                placeholder='2'
                name='i2'
                as={'input'}
                value={formValue[1]}
            />
            <Form.Control className="insert-box"
                placeholder='3'
                name='i3'
                as={'input'}
                value={formValue[2]}
            />
            <Form.Control className="insert-box"
                placeholder='4'
                name='i4'
                as={'input'}
                value={formValue[3]}
            />
        </div>
    );
}