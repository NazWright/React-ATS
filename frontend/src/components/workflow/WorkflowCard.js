import { connect } from "react-redux";
import { fetchSubmissions } from "../../actions";
import React, { Component } from "react";
import { Card, Badge, Button, Modal, Table } from "react-bootstrap";
import * as GrIcons from "react-icons/gr";
import ModalCOM from "../Modal";
class WorkflowCard extends Component {
  constructor(props) {
    super(props);
    this.state = {
      modal: false,
    };
  }

  componentDidMount() {
    this.props.fetchSubmissions();
  }

  modalOpen() {
    this.setState({ modal: true });
  }

  modalClose() {
    this.setState({ modal: false });
    //if it is a form in the modal clear form values here.
  }

  filteredSubmissions = (submissions) => {
    return submissions
      .filter((submissions) => submissions.status === this.props.card.name)
      .map((filtered) => {
        return filtered;
      });
  };

  render() {
    const { subs, card } = this.props;
    console.log(subs);
    const submissions = this.filteredSubmissions(subs);
    return (
      <div>
        <Card bg={card.background} className="add-full-height" text="white">
          <span>
            <Badge variant="light" className="counter">
              {submissions && submissions.length}
            </Badge>
          </span>
          <Card.Header>{card.title}</Card.Header>
          <Card.Body>
            <Card.Title> {submissions && submissions.length}</Card.Title>
            <Card.Text>additional info like progress</Card.Text>
            <Button variant="secondary" onClick={(e) => this.modalOpen(e)}>
              {this.props.card.buttonText}
            </Button>
          </Card.Body>
        </Card>

        <Modal show={this.state.modal} onHide={(e) => this.modalClose(e)}>
          <Modal.Header closeButton>
            <Modal.Title>{card.title}</Modal.Title>
          </Modal.Header>
          <Modal.Body>
            {submissions === undefined || submissions === null
              ? "No submissions"
              : submissions.map((submission) => {
                  return (
                    <div key={submission._id}>
                      <span className="m-r-10">
                        <GrIcons.GrUserNew />
                        <span className="m-r-10">
                          {submission.values.first}
                        </span>
                      </span>
                    </div>
                  );
                })}
          </Modal.Body>
          <Modal.Footer>
            <Button onClick={(e) => this.modalClose(e)}>Close</Button>
          </Modal.Footer>
        </Modal>
      </div>
    );
  }
}

function mapStateToProps({ subs }) {
  return { subs };
}

export default connect(mapStateToProps, { fetchSubmissions })(WorkflowCard);
