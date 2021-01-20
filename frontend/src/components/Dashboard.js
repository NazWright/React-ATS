import React, { Component } from "react";
import "./css/Dashboard.css";
import { connect } from "react-redux";
import EmployerDash from "./dashboards/EmployerDash";
import ApplicantDash from "./dashboards/ApplicantDash";

class Dashboard extends Component {
  renderContent() {
    switch (this.props.auth) {
      case false:
        return;
      case null:
        return;
      default:
        switch (this.props.auth.role) {
          case "Employer":
            return <EmployerDash />;
          case "Applicant":
            return <ApplicantDash />;
          case "Recruiter":
            break;
          case "Admin":
            return <EmployerDash />;
        }
    }
  }

  render() {
    return <div className="dashboard">{this.renderContent()}</div>;
  }
}

function mapStateToProps({ auth }) {
  return { auth };
}

export default connect(mapStateToProps)(Dashboard);
