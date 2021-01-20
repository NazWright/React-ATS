import Button from 'react-bootstrap/Button';
import React, { Component } from 'react';
import StripeCheckout from 'react-stripe-checkout';
import {connect} from 'react-redux';
import * as actions from '../actions';
import './css/Payments.css';


class Payments extends Component {
    render() {
        return (
           <StripeCheckout
           name="People Count"
           description="$50 per Employer account"
           amount={5000} // 5000 means 50 dollars 
           token={ token => this.props.handleToken(token)} // callback after auth token payment
           stripeKey={process.env.REACT_APP_STRIPE_KEY}
           >
           <Button className="add-full-width">
            Add Accounts
           </Button>

           </StripeCheckout>
            
         
        )
    }
}

export default connect(null, actions)(Payments);