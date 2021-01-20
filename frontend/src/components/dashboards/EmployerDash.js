import React, { Component } from "react";
import { WrkfwidgetData } from "../data/WrkfwidgetData";
import Card from "react-bootstrap/Card";
import Button from "react-bootstrap/Button";
import Badge from "react-bootstrap/Badge";
import CardDeck from "react-bootstrap/CardDeck";
import Form from "react-bootstrap/Form";
import Dropdown from "react-bootstrap/Dropdown";
import { Col, Row } from "react-bootstrap";
import WorkflowCard from "../workflow/WorkflowCard";

export default class EmployerDash extends Component {
  render() {
    return (
      <div>
        <Row>
          {WrkfwidgetData.map((item, index) => {
            return (
              <Col key={index}>
                <WorkflowCard card={item} />
              </Col>
            );
          })}
        </Row>
        <div className="row">
          <CardDeck>
            <Card bg="secondary" text="white">
              <Card.Header>Template Upload</Card.Header>
              <Card.Body>
                <Card.Title> Card Title </Card.Title>

                <Card.Text>
                  Some quick example text to build on the card title and make up
                  the bulk of the card's content.
                </Card.Text>
              </Card.Body>
            </Card>
            <Card className="add-scroll-bar"></Card>
          </CardDeck>
        </div>
      </div>
    );
  }
}
