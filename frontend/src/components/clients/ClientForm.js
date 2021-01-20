import React, { Component } from "react";
import Form1a from "react-bootstrap/form";
import { Field, Form } from "react-final-form";
import axios from "axios";
import { Container, Button } from "react-bootstrap";
import { FIELDS } from "./ClientFieldsData";

export default class ClientForm extends Component {
  required = (value) => (value ? undefined : "Required");

  submitClient = (values) => {
    axios.post("/api/clients", values);
  };

  render() {
    return (
      <div>
        <h1>New Client</h1>
        <hr></hr>
        <Form onSubmit={(values) => this.submitClient(values)}>
          {({ handleSubmit, dirty, pristine, values, submitting }) => (
            <Container>
              <Form1a as="form" onSubmit={handleSubmit}>
                <div>
                  {FIELDS.map((field, index) => {
                    return (
                      <Field
                        key={index}
                        name={field.name}
                        placeholder={field.label}
                        validate={field.required ? this.required : undefined}
                      >
                        {({ input, meta, placeholder }) => (
                          <div className={meta.active ? "active" : ""}>
                            <Form1a.Label>{field.label}</Form1a.Label>

                            <Form1a.Control
                              as={field.type}
                              {...input}
                              placeholder={placeholder}
                            ></Form1a.Control>
                            {meta.error && meta.touched && (
                              <div className="red-text">{meta.error}</div>
                            )}
                            <div></div>
                          </div>
                        )}
                      </Field>
                    );
                  })}
                  <Button as="button" type="submit" disabled={submitting}>
                    Submit
                  </Button>
                  <pre>{JSON.stringify(values, undefined, 2)}</pre>
                </div>
              </Form1a>
            </Container>
          )}
        </Form>
      </div>
    );
  }
}
