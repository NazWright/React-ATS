import React, { Component } from "react";
import Form1a from "react-bootstrap/Form";
import { Field, Form } from "react-final-form";
import axios from "axios";
import { fetchForm, submitApplication } from "../../actions";
import { Container, Button } from "react-bootstrap";
import { connect } from "react-redux";
import Swal from "sweetalert2";

class ApplyForm extends Component {
  componentDidMount() {
    this.props.fetchForm("associate-application");
  }

  submitApp = (values) => {
    values.listingId = this.props.match.params.id;
    //document.getElementById("submit").disabled = true;
    this.props.submitApplication(values, "associate-application");
  };

  required = (value) => (value ? undefined : "Required");

  render() {
    return (
      <div>
        <Form onSubmit={(values) => this.submitApp(values)}>
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
                </div>
                <button type="submit" id="submit" disabled={submitSucceeded}>
                  Submit
                </button>
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

export default connect(mapStateToProps, { fetchForm, submitApplication })(
  ApplyForm
);
