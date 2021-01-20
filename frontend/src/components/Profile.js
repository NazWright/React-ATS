import React, { Component } from 'react';
import {Container, Col, Row } from 'react-bootstrap';
import {connect} from 'react-redux';
import * as actions from '../actions';
import Form from 'react-bootstrap/Form';
import Button from 'react-bootstrap/esm/Button';
import './css/Profile.css';

 class Profile extends Component {
    componentDidMount(){

    }

    renderContent(){
        switch(this.props.auth){
            case null:
                return;
            case false:
                return;
            default:
                return(
                    <Form className="profile-form">
                        <Col sm={6}>
                            <Row> 
                            <Form.Label>First Name</Form.Label>
                                <Form.Control
                                className="listings-field"
                                as="input"
                                type="text" 
                                placeholder=""
                                name="firstName"
                                defaultValue={this.props.auth.givenName}
                                onChange={this.onChange}
                                />
                            </Row>
                            <Row> 
                            <Form.Label>Last Name</Form.Label>
                                <Form.Control
                                className="listings-field"
                                as="input"
                                type="text" 
                                placeholder=""
                                name="lastName"
                                defaultValue={this.props.auth.familyName}
                                onChange={this.onChange}
                                />
                            </Row>
                            <Row> 
                            <Form.Label>Email Address</Form.Label>
                                <Form.Control
                                className="listings-field"
                                as="input"
                                type="text" 
                                placeholder=""
                                name="email"
                                defaultValue={this.props.auth.email}
                                onChange={this.onChange}
                                />
                            </Row>
                            <Row>
                                <Button>
                                    Update Profile
                                </Button>
                            </Row>
                        </Col>
                        
                    </Form>
                )
        }
    }

    render() {
        
        return (
            <Container>
               {this.renderContent()}
            </Container>
        )
    }
}

function mapStateToProps({auth}){
    return {auth}
}

export default connect(mapStateToProps , actions)(Profile)