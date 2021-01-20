import React, { Component } from "react";
import { Button, Nav, Navbar, Form, FormControl } from "react-bootstrap";
export default class VisitorHeader extends Component {
  render() {
    return (
      <div className="login-header">
        <Navbar className="position-to-top" variant="light">
          <Navbar.Brand href="/">People Count</Navbar.Brand>
          <Nav className="mr-auto">
            <Nav.Link href="/auth/google/applicant">
              Sign in to Applicant Dashboard
            </Nav.Link>
            <Nav.Link href="/auth/google/employer">
              Sign in to Employer Dashboard
            </Nav.Link>
          </Nav>
          <Form inline>
            <FormControl type="text" placeholder="Search" className="mr-sm-2" />
          </Form>
          <Button variant="outline-primary">Search</Button>
          <Nav.Link className="blue-text" href="/auth/google">
            Login with Google
          </Nav.Link>
        </Navbar>
      </div>
    );
  }
}
