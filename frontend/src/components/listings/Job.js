import axios from "axios";
import React, { Component } from "react";
import { Button, Col, Row, Badge, Container } from "react-bootstrap";
import { connect } from "react-redux";
import { fetchListing } from "../../actions";
import * as RiIcons from "react-icons/ri";

class Job extends Component {
  constructor(props) {
    super(props);
  }

  componentDidMount() {
    this.props.fetchListing();
  }

  renderJob() {
    return (
      // filter the the matching listing
      this.props.listings &&
      this.props.listings
        .filter((listing) => listing.title === this.props.match.params.id)
        .map((listing) => {
          return (
            <div key={listing._id}>
              <Row className=" bg-gray">
                <Col>
                  <div>
                    <div>
                      <h4>{listing.jobinfo.category}</h4>
                    </div>
                  </div>
                  <div>
                    <div>
                      <h3>
                        {listing.title}{" "}
                        <span className="m-r-5">
                          {listing.new ? (
                            <Badge variant="success">New</Badge>
                          ) : undefined}
                        </span>
                        <span className="m-r-5">
                          {listing.jobinfo.jobType ? (
                            <Badge variant="danger">
                              {listing.jobinfo.jobType}
                            </Badge>
                          ) : undefined}
                        </span>
                      </h3>{" "}
                    </div>
                  </div>
                </Col>

                <Col>
                  <Row></Row>
                  <Row>
                    <Button href={`/apply/${listing._id}`}>Apply</Button>
                  </Row>
                </Col>
              </Row>
              <div>
                <div className="float-container">
                  <div className="float-child">
                    <span className="m-r-20 ">
                      <RiIcons.RiSuitcaseLine size={50} color="black" />
                    </span>
                    <span>{listing.jobinfo.companyName}</span>
                    <hr></hr>
                  </div>
                  <div className="float-child"></div>
                </div>
              </div>
            </div>
          );
        })
    );
  }

  render() {
    const { match } = this.props;
    return <div>{this.renderJob()}</div>;
  }
}

function mapStateToProps({ listings }) {
  return { listings };
}

export default connect(mapStateToProps, { fetchListing })(Job);
