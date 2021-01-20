import "./css/App.css";
import Sidebar from "./Sidebar";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import Dashboard from "./Dashboard";
import Contacts from "./Contacts";
import Landing from "./Landing";
import "bootstrap/dist/css/bootstrap.min.css";
import { connect } from "react-redux";
import * as actions from "../actions";
import ListingForm from "./listings/ListingForm";
import "materialize-css";
import Profile from "./Profile";
import ApplicationForm from "../components/applications/applicationForm";
import React, { Component } from "react";
import Pricing from "./pricing/PricingPage";
import Success from "./Success";
import Failure from "./Failure";
import ListingList from "./listings/ListingsList";
import ClientForm from "./clients/ClientForm";
import ClientList from "./clients/ClientList";

class App extends Component {
  componentDidMount() {
    this.props.fetchUser();
  }

  renderLanding() {
    return <Landing />;
  }

  render() {
    return (
      <div className="App">
        <Router>
          <Sidebar />
          <Switch>
            <Route path="/" exact component={Landing} />
            <Route path="/dashboard" exact component={Dashboard} />
            <Route path="/contacts" exact component={Contacts} />
            <Route path="/add-listings" exact component={ListingForm} />
            <Route path="/profile" exact component={Profile} />
            <Route path="/apply" exact component={ApplicationForm} />
            <Route path="/pricing" exact component={Pricing} />
            <Route path="/success" exact component={Success} />
            <Route path="/failure" exact component={Failure} />
            <Route path="/listings" exact component={ListingList} />
            <Route path="/add-client" exact component={ClientForm} />
            <Route path="/view-client" exact component={ClientList} />
          </Switch>
        </Router>
      </div>
    );

    // if not logged in render the login page
  }
}

function mapStateToProps({ listings }) {
  return { listings };
}

export default connect(mapStateToProps, actions)(App);
