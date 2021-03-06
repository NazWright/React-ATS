import React, { Component } from "react";
import Form1a from "react-bootstrap/Form";
import { Field, Form } from "react-final-form";
import axios from "axios";
import { fetchForm, register } from "../actions";
import { Container, Button } from "react-bootstrap";
import { connect } from "react-redux";
import Swal from "sweetalert2";

class Login extends Component {
  constructor(props) {
    super(props);
    this.state = {
      applicant: false,
      employer: false,
    };
  }

  componentDidMount() {
    this.props.fetchForm("sign-up-form");
  }

  submitApplication = async (values) => {
    this.props.register(values);
    Swal.fire({
      title: "Submitted",
    });
    //document.getElementById("submit").disabled = true;
  };

  required = (value) => (value ? undefined : "Required");

  onChangeInput = (event) => {
    if (event && event.target) {
      switch (event.target.id) {
        case "applicant":
          this.setState({ employer: true, applicant: false });
        case "employer":
          this.setState({ employer: true, applicant: false });
          break;
      }
      console.log(this.state);
    } else {
      return;
    }
  };
  // wbuwebrwugrg
  render() {
    return (
      <div>
        <Form
          onSubmit={(values) => {
            this.submitApplication(values);
          }}
        >
          {({
            handleSubmit,
            submitSucceeded,
            submitting,
            dirty,
            pristine,
            values,
            form,
          }) => (
            <Container>
              <form
                id="form"
                onSubmit={async (e) => {
                  await handleSubmit(e);
                }}
              >
                <div>
                  {this.props.fields.map((field, index) => {
                    return (
                      <Field
                        key={index}
                        name={field.name}
                        validate={
                          field.validation.required ? this.required : undefined
                        }
                      >
                        {({ input, meta, placeholder }) => (
                          <div className={meta.active ? "active" : ""}>
                            <label>{field.label}</label>

                            <input type="text" {...input}></input>
                            {meta.error && meta.touched && (
                              <div className="red-text">{meta.error}</div>
                            )}
                            <div></div>
                          </div>
                        )}
                      </Field>
                    );
                  })}
                  <Field name="role" validate={this.required}>
                    {({ input, meta, placeholder }) => (
                      <div className={meta.active ? "active" : ""}>
                        <label>Purpose for using People Count</label>

                        <select name="role" {...input}>
                          <option hidden>Select an option</option>
                          <option value="Applicant">
                            I am looking to apply to job openings
                          </option>
                          <option value="Employer">
                            I am an employer looking for a staffing solution
                          </option>
                        </select>

                        <div></div>
                      </div>
                    )}
                  </Field>
                </div>
                <button type="submit" id="submit" disabled={submitSucceeded}>
                  Submit
                </button>
                <button>Sign Up using Google</button>
                <pre>{JSON.stringify(values, undefined, 2)}</pre>
              </form>
            </Container>
          )}
        </Form>
      </div>
    );
  }
}

function mapStateToProps({ fields }) {
  return { fields };
}

export default connect(mapStateToProps, { fetchForm, register })(Login);
