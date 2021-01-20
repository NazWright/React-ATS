import { Field, Form } from "react-final-form";
import * as actions from "../../actions";
import { FIELDS } from "../data/ListingFormData";
import Form1a from "react-bootstrap/Form";
import { Container, Button } from "react-bootstrap";
import { connect } from "react-redux";
import React, { Component } from "react";
import axios from "axios";

class ListingForm extends Component {
  required = (value) => (value ? undefined : "Required");

  constructor(props) {
    super(props);
    this.state = {
      locations: [],
    };
  }

  componentDidMount() {
    axios
      .get("/api/zipcodes")
      .then((res) => {
        const locations = res.data;
        this.setState({ locations: locations });
      })
      .catch((err) => console.log(err));
  }

  /*getCities() {
    axios
      .get("/api/zipcodes")
      .then((res) => {
        const locations = res.data;
        this.setState({ locations: locations });
      })
      .catch((err) => console.log(err));
  }*/

  handleField = (name) => {
    switch (name) {
      case "category":
        return [
          <option key={0} hidden>
            Select a Category
          </option>,
          <option key={1} value="Default">
            Default
          </option>,
          <option key={2} value="Default">
            Default
          </option>,
        ];
      case "state":
        return [
          <option key={0} hidden>
            Select a State
          </option>,
          <option key={1} defaultValue="NC">
            NC
          </option>,
        ];
      case "country":
        return [
          <option key={0} hidden>
            Select a Country
          </option>,
          <option key={1} value="United States of America">
            United States of America
          </option>,
        ];
      default:
        return;
    }
  };

  render() {
    console.log(this.state.locations);
    return (
      <div>
        {this.state && this.state.locations && this.state.locations.length > 0 && (
          <div>
            <h1>Add new listing</h1>
            <hr></hr>
            <Form onSubmit={(values) => axios.post("/api/listings", values)}>
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
                            validate={
                              field.type === "select"
                                ? undefined
                                : this.required
                            }
                          >
                            {({ input, meta, placeholder }) => (
                              <div className={meta.active ? "active" : ""}>
                                <Form1a.Label>{field.label}</Form1a.Label>

                                <Form1a.Control
                                  as={field.type}
                                  {...input}
                                  placeholder={placeholder}
                                >
                                  {field.name === "city"
                                    ? this.state.locations.map((item, i) => {
                                        return (
                                          <option key={i} value={item.city}>
                                            {item.city}
                                          </option>
                                        );
                                      })
                                    : this.handleField(field.name)}
                                </Form1a.Control>
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
        )}
      </div>
    );
  }
}

function mapStateToProps({ zipcodes }) {
  return { zipcodes };
}

export default connect(mapStateToProps, actions)(ListingForm);
