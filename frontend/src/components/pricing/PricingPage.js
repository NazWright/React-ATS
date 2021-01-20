import React, { Component } from "react";
import ReactDOM from "react-dom";
import axios from "axios";
import { loadStripe } from "@stripe/stripe-js";
// Make sure to call `loadStripe` outside of a component’s render to avoid
// recreating the `Stripe` object on every render.

//
const stripePromise = loadStripe(
  "pk_test_51I3QyMEah8AfDWDxGBcOllDRXirhbQ4PmO79prpK4rmIO2nGnS0C8b6nbUBcmjPCnWpCaSP6lvhemOrejM8V7oie00I7tIPnAf"
);
export default class PricingPage extends Component {
  openPortal() {
    axios.post("/api/customer-portal").then((res) => {
      console.log(res);
    });
  }

  handleClick(event) {
    event.preventDefault();
    var priceId = "";
    switch (event.target.name) {
      case "bronze":
        priceId = "price_1I7qL1Eah8AfDWDxTZOgsizw";
        break;
      case "silver":
        priceId = "price_1I7qMtEah8AfDWDx0rFA5bGj";
        break;
      case "gold":
        priceId = "price_1I7qTREah8AfDWDxVT8yjaiP";
        break;
    }

    stripePromise.then((stripe) => {
      axios
        .post("/api/create-checkout-session", {
          priceId: priceId,
        })
        // res.data.sessionId
        .then((response) => {
          stripe
            .redirectToCheckout({
              sessionId: response.data.sessionId,
            })
            .catch((err) => {
              if (err) {
                // display localized error
                console.log(err);
              }
            });
        });
    });
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
            <a name="bronze" onClick={this.handleClick}>
              select
            </a>
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
            <a name="silver" onClick={this.handleClick}>
              select
            </a>
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
            <a name="gold" onClick={this.handleClick}>
              select
            </a>
          </div>
        </div>
      </div>
    );
  }
}
