import React, { Component } from 'react';
import { Form, Field } from 'react-final-form';
import ListingField from './ListingField';
import Button from 'react-bootstrap/esm/Button';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import { Link } from 'react-router-dom';
import '../css/ListingForm.css';


const FIELDS = [
    {label: 'Listing Title', name: 'title', noValueError:"Please provide the listing title"},
    {label: 'Description', name: 'description', noValueError:"Please add a description for this job"},
    {label: 'Compensation', name: 'compensation', noValueError:"You must specify the compensation for this job"},
    {label: 'Benefits Offered', name: 'benefits', noValueError:"You must specify benefits"},
    {label: 'Job Type', name: 'jobType', noValueError:"You must select a Job type"},
    {label: 'Category', name: 'category', noValueError:"You must select a category"}
];

export default class ListingForm extends Component {
 
    render() {
        return (
        <Container>
            <Form
                onSubmit = {this.props.onListingSubmit}
                validate = {validate}
               
            >
                {({ handleSubmit, pristine, form, submitting }) => (
                    <form onSubmit={handleSubmit}>
                        {this.renderFields()}
                        <Row>
                     <Col sm={2} >
                    <Link to="/dashboard" className="red btn-flat white-text">
                        Cancel
                    </Link>
                    </Col>
                    <Col sm={2}>
                            <Button
                             as="button"
                             type="submit"
                             variant="primary"
                             className="right"
                            >
                            Submit
                            </Button>
                    </Col>
                        
                            </Row>
                    </form>
                )}
            </Form>
            </Container>
        )
    }
}

function validate( values ){
    const errors = {};

    FIELDS.forEach(
        ({name, noValueError}) =>{
            if( !values[name] ) {
                errors[name] = noValueError;
            }
        }
    )
    return errors;

}
