import React, { Component } from "react";
import { connect } from "react-redux";
import "./css/Sidebar.css";
import LoggedInHeader from "./headers/LoggedInHeader";
import VisitorHeader from "./headers/VisitorHeader";

class Sidebar extends Component {
  renderContent() {
    switch (this.props.auth) {
      // still waiting to see if there user is logged in
      case null:
        return;
      // when false the user is not logged in
      case false:
        return <VisitorHeader />;
      // logged in
      default:
        return <LoggedInHeader />;
    }
  }

  render() {
    return <div>{this.renderContent()}</div>;
  }
}
function mapStateToProps({ auth }) {
  return { auth };
}

export default connect(mapStateToProps)(Sidebar);
