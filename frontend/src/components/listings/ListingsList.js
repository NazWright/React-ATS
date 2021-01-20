import React, { Component } from "react";
import axios from "axios";
import ListingsItem from "./ListingsItem";

export default class ListingsList extends Component {
  constructor(props) {
    super(props);
    this.state = {
      listings: [],
    };
  }

  componentDidMount() {
    axios.get("/api/listings").then((res) => {
      if (res) {
        console.log("Listings", res);
        this.setState({ listings: res.data });
      }
      return;
    });
  }

  render() {
    return (
      <div>
        {this.state.listings &&
          this.state.listings.length > 0 &&
          this.state.listings.map((listing) => {
            return <ListingsItem listing={listing} />;
          })}
      </div>
    );
  }
}
