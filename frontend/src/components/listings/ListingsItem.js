import React, { Component } from "react";
import {
  Row,
  Col,
  Container,
  Media,
  Badge,
  Button,
  Card,
} from "react-bootstrap";
import * as RiIcons from "react-icons/ri";
import * as IoIcons from "react-icons/io";
import * as GrIcons from "react-icons/gr";
import * as AiIcons from "react-icons/ai";
import { Link } from "react-router-dom";
import { connect } from "react-redux";
import { fetchUser } from "../../actions";

class ListingsItem extends Component {
  componentDidMount() {
    this.props.fetchUser();
  }

  renderButtons() {
    switch (this.props.auth) {
      case null:
        return;
      case false:
        return;
      default:
        switch (this.props.auth.role) {
          case "Admin":
            return [
              <Button variant="danger" key={0}>
                Delete Listing
              </Button>,
              <Button variant="danger" key={1}>
                Edit Listing
              </Button>,
            ];
          default:
            return;
        }
    }
  }

  render() {
    const { listing } = this.props;
    return (
      <Card className="mb-3">
        <Card.Body>
          <div className="d-flex justify-content-between">
            <div>
              <Card.Title>
                {listing.title}-{" "}
                <span className="text-muted font-weight-light">
                  {listing.jobinfo.companyName}
                </span>
              </Card.Title>
              <Card.Subtitle className="text-muted mb-2">
                {new Date(listing.dateCreated).toLocaleDateString()}
              </Card.Subtitle>
              {listing.new ? (
                <Badge variant="success" className="mr-2">
                  New
                </Badge>
              ) : undefined}
              {listing.jobinfo.jobType ? (
                <Badge variant="danger">{listing.jobinfo.jobType}</Badge>
              ) : undefined}
              <div style={{ wordBreak: "break-all" }}>
                {listing.jobinfo.description}
              </div>
            </div>
            <RiIcons.RiSuitcase2Fill size={40} className="d-none d-md-block" />
          </div>
          <Card.Text>
            <Button href={`/job/${listing.title}`} variant="danger">
              View Job
            </Button>
          </Card.Text>
        </Card.Body>
      </Card>
    );
  }
}

function mapStateToProps({ auth }) {
  return { auth };
}

export default connect(mapStateToProps, { fetchUser })(ListingsItem);
