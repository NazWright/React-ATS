import React from 'react';
import { Form, Field } from 'react-final-form';
import Form1a from 'react-bootstrap/Form';
import Row from 'react-bootstrap/Row';


export default ( {input, label, meta} ) => {
    return(
        <div className="add-half-width ">
            <Form1a.Label as="label">{label}</Form1a.Label>
           <Form1a.Control as="input" {...input} style={{marginBottom: '20px'}}/>
           <div className="red-text">
           {meta && meta.touched && meta.error}
           </div>
        </div>
    )
}