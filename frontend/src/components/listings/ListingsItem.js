import React, { Component } from "react";
import { Media } from "react-bootstrap";

export default class ListingsItem extends Component {
  render() {
    return (
      <div>
        <Media>
          <img>
            {
              //logo here
            }
          </img>
          <Media.Body>
            <h4>{this.props.listing.title}</h4>
            <p>{this.props.listing.description}</p>
            <span>tags here</span>
          </Media.Body>
        </Media>
        <hr></hr>
      </div>
    );
  }
}
