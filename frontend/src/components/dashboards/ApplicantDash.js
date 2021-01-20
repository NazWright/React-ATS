import React, { Component } from "react";
import {
  Col,
  Row,
  Card,
  Button,
  Form,
  FormControl,
  Media,
  ListGroup,
  Container,
} from "react-bootstrap";
import Contacts from "../Contacts";
import ActionButtonData from "../data/ActionButtonData";
import { connect } from "react-redux";
import * as actions from "../../actions";

class ApplicantDash extends Component {
  render() {
    return (
      <div>
        <Row>
          <Card bg="danger" className="action-button-card">
            <Card.Header> Actions </Card.Header>
            <Card.Body>
              {ActionButtonData.map((button, index) => {
                return (
                  <span key={index}>
                    <Button sm={2}>{button.title}</Button>
                  </span>
                );
              })}
            </Card.Body>
          </Card>
        </Row>
        <Row>
          <Col>
            <Card>
              <Card.Header>Search Contacts</Card.Header>
              <Card.Body>
                <Row>
                  <Form inline>
                    <FormControl
                      type="text"
                      placeholder="Search"
                      className="mr-sm-2"
                    />
                    <Button variant="outline-primary">Search</Button>
                  </Form>
                </Row>
                <Row>
                  <div className="add-full-width">
                    <Media>
                      <img
                        width={64}
                        height={64}
                        className="align-self-start mr-3"
                        src="holder.js/64x64"
                        alt="Generic placeholder"
                      />
                      <Media.Body>
                        <h5>John Doe</h5>
                      </Media.Body>
                    </Media>

                    <Media>
                      <img
                        width={64}
                        height={64}
                        className="align-self-center mr-3"
                        src="holder.js/64x64"
                        alt="Generic placeholder"
                      />
                      <Media.Body>
                        <h5>Jane Doe</h5>
                      </Media.Body>
                    </Media>

                    <Media>
                      <img
                        width={64}
                        height={64}
                        className="align-self-end mr-3"
                        src="holder.js/64x64"
                        alt="Generic placeholder"
                      />
                      <Media.Body>
                        <h5>John Doe</h5>
                      </Media.Body>
                    </Media>
                  </div>
                </Row>
              </Card.Body>
            </Card>
          </Col>

          <Col>
            <Card className="add-scroll-bar"></Card>
          </Col>
        </Row>
        <Row>
          <Col>
            <Card>
              <Card.Header>Contact Message</Card.Header>
              <Card.Body>
                <Form>
                  <FormControl
                    type="text"
                    placeholder="Recipient"
                    className="mr-sm-2"
                  />
                  <FormControl
                    type="textarea"
                    placeholder="Message"
                    className="mr-sm-2 height-100"
                  />
                  <Button variant="outline-primary">Send Message</Button>
                </Form>
              </Card.Body>
            </Card>
          </Col>

          <Col>
            <Card bg="primary">
              <Card.Header>Applications</Card.Header>
              <Card.Body>
                <ListGroup className="add-full-width">
                  <ListGroup.Item disabled>Applications</ListGroup.Item>
                  <ListGroup.Item>Dapibus ac facilisis in</ListGroup.Item>
                  <ListGroup.Item>Morbi leo risus</ListGroup.Item>
                  <ListGroup.Item>Porta ac consectetur ac</ListGroup.Item>
                </ListGroup>
              </Card.Body>
            </Card>
          </Col>
        </Row>
        <Row></Row>
      </div>
    );
  }
}

function mapStateToProps({ listings }) {
  return { listings };
}

export default connect(mapStateToProps, actions)(ApplicantDash);
