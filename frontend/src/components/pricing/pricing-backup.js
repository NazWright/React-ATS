import React, { Component } from "react";
import { Container } from "react-bootstrap";
import ReactDOM from "react-dom";
import { loadStripe } from "@stripe/stripe-js";
import { connect } from "react-redux";
import axios from "axios";
import * as actions from "../../actions";

const stripePromise = loadStripe(
  "pk_test_51I3QyMEah8AfDWDxGBcOllDRXirhbQ4PmO79prpK4rmIO2nGnS0C8b6nbUBcmjPCnWpCaSP6lvhemOrejM8V7oie00I7tIPnAf"
);

class PricingPage extends Component {
  componentDidMount() {
    createCheckoutSession("price_1I7qL1Eah8AfDWDxTZOgsizw");
  }

  render() {
    return (
      <div className="pricing-page-container">
        <div className="pricing-header">Choose A Plan</div>
        <div className="wrapper">
          <div className="single-price">
            <h1>Bronze</h1>
            <div className="price">
              <h2>$75</h2>
            </div>
            <div className="deals">
              <h4> Monthly </h4>
              <h4> Lorem ipsum dolor </h4>
              <h4> Lorem ipsum dolor </h4>
              <h4> Lorem ipsum dolor </h4>
              <h4> Lorem ipsum dolor </h4>
            </div>
            <a href="#">select</a>
          </div>
          <div className="single-price">
            <h1>Silver</h1>
            <div className="price">
              <h2>$100</h2>
            </div>
            <div className="deals">
              <h4> Monthly </h4>
              <h4> Lorem ipsum dolor </h4>
              <h4> Lorem ipsum dolor </h4>
              <h4> Lorem ipsum dolor </h4>
              <h4> Lorem ipsum dolor </h4>
            </div>
            <a href="#">select</a>
          </div>

          <div className="single-price">
            <h1>Gold </h1>
            <div className="price">
              <h2>$150</h2>
            </div>
            <div className="deals">
              <h4> Monthly </h4>
              <h4> Lorem ipsum dolor </h4>
              <h4> Lorem ipsum dolor </h4>
              <h4> Lorem ipsum dolor </h4>
              <h4> Lorem ipsum dolor </h4>
            </div>
            <a href="#">select</a>
          </div>
        </div>
      </div>
    );
  }
}

export default connect(null, actions)(PricingPage);
