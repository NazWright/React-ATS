import React, { Component } from "react";
import axios from "axios";
import ClientListItem from "./ClientListItem";

export default class ListingsList extends Component {
  constructor(props) {
    super(props);
    this.state = {
      clients: [],
    };
  }

  componentDidMount() {
    axios.get("/api/clients").then((res) => {
      if (res) {
        console.log("Clients", res);
        this.setState({ clients: res.data });
      }
      return;
    });
  }

  render() {
    return (
      <div>
        {this.state.clients &&
          this.state.clients.length > 0 &&
          this.state.clients.map((client, index) => {
            return <ClientListItem key={index} client={client} />;
          })}
      </div>
    );
  }
}
