import React, { Component } from "react";
import { Card, Badge, Button } from "react-bootstrap";
export default class WorkflowCard extends Component {
  componentDidMount() {}

  render() {
    return (
      <div>
        <Card
          bg={this.props.card.background}
          className="add-full-height"
          text="white"
        >
          <span>
            <Badge variant="light" className="counter">
              9
            </Badge>
          </span>
          <Card.Header>{this.props.card.title}</Card.Header>
          <Card.Body>
            <Card.Title># of applicants</Card.Title>
            <Card.Text>additional info like progress</Card.Text>
            <Button variant="secondary">{this.props.card.buttonText}</Button>
          </Card.Body>
        </Card>
      </div>
    );
  }
}
