
import React from 'react';
import Button from 'react-bootstrap/esm/Button';
import { connect } from 'react-redux';
import ListingForm from './ListingForm';

const ListingReview = () => {
    return (
        <div>
            <h5>Please Confirm your entries</h5>
        {console.log(ListingForm)}
            
        </div>
    );
};

function mapStateToProps(state) {
    console.log("State is " , state)
    return{};
}

export default connect(mapStateToProps)(ListingReview);