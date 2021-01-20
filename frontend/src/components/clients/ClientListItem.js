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
            <h4>{this.props.client.clientName}</h4>
            <span>Client Info Here</span>
          </Media.Body>
        </Media>
        <hr></hr>
      </div>
    );
  }
}
