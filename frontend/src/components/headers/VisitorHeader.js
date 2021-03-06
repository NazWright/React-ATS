import React, { Component } from "react";
import { Button, Nav, Navbar, Form, FormControl } from "react-bootstrap";
export default class VisitorHeader extends Component {
  render() {
    return (
      <div>
        <div className="navbar">
          <div className="login-header">
            <Navbar className="position-to-top" variant="light">
              <Navbar.Brand href="/">People Count</Navbar.Brand>
              <Nav className="mr-auto">
                <Nav.Link href="/auth/google/applicant">Applicants</Nav.Link>
                <Nav.Link href="/auth/google/employer">Employers</Nav.Link>
              </Nav>
              <Form inline>
                <FormControl
                  type="text"
                  placeholder="Search"
                  className="mr-sm-2"
                />
              </Form>
              <Button variant="outline-primary">Search</Button>
              <Nav.Link className="blue-text" href="/login">
                Login
              </Nav.Link>
            </Navbar>
          </div>
        </div>
      </div>
    );
  }
}
