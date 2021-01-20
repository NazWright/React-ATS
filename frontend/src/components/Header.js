import React, { Component } from 'react';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import Container from 'react-bootstrap/Container';
import './css/Header.css';
import {connect} from 'react-redux';


export default class Header extends Component {
    render() {
        return (
            <div className="header-background">
                <Navbar bg="primary" className="header-bar">
                        <Navbar.Brand href="#home" className="logo">
                            People Count</Navbar.Brand>
                    </Navbar>
            </div>
                    
        )
    }
}

function mapStatetoProps({auth}){
    return {auth};
}

export default connect( mapStatetoProps )(Header);