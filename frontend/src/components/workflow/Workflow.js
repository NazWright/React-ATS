import React, { Component } from "react";
import {
  Form,
  Col,
  FormControl,
  Button,
  Container,
  Row,
  Modal,
} from "react-bootstrap";
import { fetchSubmissions, fetchListing } from "../../actions";
import { connect } from "react-redux";
import * as GrIcons from "react-icons/gr";

class Workflow extends Component {
  constructor(props) {
    super(props);
    this.state = {
      filter: "",
      modal: false,
      email: "",
    };
  }

  componentDidMount() {
    this.props.fetchSubmissions();
    this.props.fetchListing();
  }

  handleSearch = (event) => {
    if (event && event.target) {
      switch (event.target.type) {
        case "select-one":
          this.setState({ status: event.target.value });
          break;
        case "text":
          this.setState({ result: event.target.value });
          break;
        default:
          console.log(event.target.type);
          break;
      }
    }
  };

  handleOnClick(event) {
    if (event && event.target) {
      if (event.target.type === "button") {
        this.modalOpen(event);
      }
    }
  }

  modalOpen(event, submission) {
    this.setState({
      modal: true,
    });
  }

  modalClose() {
    this.setState({ modal: false });
  }

  render() {
    const { subs } = this.props;
    return (
      <Container>
        <div>
          <Form>
            <Form.Row>
              <Col>
                <FormControl
                  as="select"
                  onChange={(e) => this.handleSearch(e)}
                  placeholder="Select Workflow Status"
                >
                  <option hidden>Select Workflow Status</option>
                  <option value="">All</option>
                  <option value="new">New</option>
                  <option value="active">Active</option>
                  <option value="inactive">Inactive</option>
                  <option value="placed">Placed</option>
                  <option value="terminated">Terminated</option>
                  <option value="dnr">Do Not Return</option>
                </FormControl>
              </Col>
              <Col>
                <FormControl
                  value={this.state.filter}
                  onChange={(e) => this.handleSearch(e)}
                  type="text"
                  placeholder="Search By Name"
                />
              </Col>
              <Col>
                <Button>Search</Button>
              </Col>
            </Form.Row>
          </Form>
        </div>
        <Row>
          <table className="table table-striped table-hover">
            <thead>
              <tr>
                <th scope="col"></th>
                <th scope="col">First Name</th>
                <th scope="col">Last Name</th>
                <th scope="col">Status</th>
                <th scope="col">Job</th>
              </tr>
            </thead>
            <tbody>
              {subs.map((submission, index) => {
                return (
                  <tr
                    key={index}
                    className={
                      this.state.status &&
                      this.state.status !== submission.status
                        ? "d-none"
                        : undefined
                    }
                  >
                    <th scope="row">
                      <Button
                        name={`${submission.values.email}`}
                        href={`/applicant/${submission._id}`}
                      >
                        View
                      </Button>
                    </th>
                    <td>{submission.values.first}</td>
                    <td>{submission.values.last}</td>
                    <td>{submission.status}</td>
                    <td>{}</td>
                  </tr>
                );
              })}
            </tbody>
          </table>
        </Row>
        <Modal show={this.state.modal} onHide={(e) => this.modalClose(e)}>
          <Modal.Header closeButton>
            <Modal.Title></Modal.Title>
          </Modal.Header>
          <Modal.Body>
            <div className="float-container">
              <div className="float-child">
                <table>
                  <thead></thead>
                  <tbody></tbody>
                </table>
              </div>
              <div className="float-child"></div>
            </div>
          </Modal.Body>
          <Modal.Footer>
            <Button onClick={(e) => this.modalClose(e)}>Close</Button>
          </Modal.Footer>
        </Modal>
      </Container>
    );
  }
}

function mapStateToProps({ subs, listings }) {
  return { subs, listings };
}

export default connect(mapStateToProps, { fetchSubmissions, fetchListing })(
  Workflow
);
