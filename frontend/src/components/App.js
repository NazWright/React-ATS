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
import ApplyForm from "./applications/ApplyForm";
import React, { Component } from "react";
import Pricing from "./pricing/PricingPage";
import Success from "./Success";
import Failure from "./Failure";
import ClientForm from "./clients/ClientForm";
import ClientList from "./clients/ClientList";
import Map from "./maps/Map";
import ProgressBar from "./workflow/ProgressBar";
import Job from "./listings/Job";
import ListingsPage from "./listings/ListingsPage";
import Workflow from "./workflow/Workflow";
import Login from "./Login";
import Signup from "./Signup";
import Applicant from "./workflow/Applicant";

class App extends Component {
  componentDidMount() {
    this.props.fetchUser();
    this.props.fetchListing();
  }

  renderLanding() {
    return <Landing />;
  }

  Child() {
    console.log(this.props.route.params);
  }

  render() {
    console.log(this.props.listings);
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
            <Route
              path="/apply/:id"
              render={(props) => {
                return <ApplyForm {...props} />;
              }}
            />
            <Route path="/pricing" exact component={Pricing} />
            <Route path="/success" exact component={Success} />
            <Route path="/failure" exact component={Failure} />
            <Route path="/listings" exact component={ListingsPage} />
            <Route path="/add-listings" exact component={ListingForm} />
            <Route path="/add-client" exact component={ClientForm} />
            <Route path="/view-client" exact component={ClientList} />
            <Route path="/workflow" exact component={Workflow} />
            <Route path="/map" exact component={Map} />
            <Route path="/progress" exact component={ProgressBar} />
            <Route path="/signup" exact component={Signup} />
            <Route path="/login" exact component={Login} />
            <Route
              path="/applicant/:id"
              render={(props) => {
                return <Applicant {...props} />;
              }}
            />

            <Route
              path="/job/:id"
              render={(props) => {
                return <Job {...props} />;
              }}
            />
          </Switch>
        </Router>
      </div>
    );

    // if not logged in render the login page
  }
}

export default connect(null, actions)(App);
