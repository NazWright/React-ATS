import React, { useState, useEffect } from "react";
import ListingsItem from "./ListingsItem";
import { Container, Spinner } from "react-bootstrap";

function ListingsList(props) {
  if (props.loading) {
    return (
      <Spinner animation="border" role="status">
        <span className="sr-only">Loading...</span>
      </Spinner>
    );
  }

  function renderListings() {
    //console.log("this is listings", props.listings);
    // reverse for the newest listings first.
    return props.listings.reverse().map((listing) => {
      return <ListingsItem key={listing._id} listing={listing} />;
    });
  }

  return (
    <div className="my-4">
      <div>{renderListings()}</div>
    </div>
  );
}

export default ListingsList;
