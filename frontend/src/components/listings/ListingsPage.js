import React, { useState, useEffect } from "react";
import ListingsList from "./ListingsList";
import { connect } from "react-redux";
import { fetchListing } from "../../actions";
import JobsPagination from "./JobsPagination";

function ListingsPage(props) {
  const [loading, setLoading] = useState(false);
  const [currentPage, setCurrentPage] = useState(1);
  const [listingsPerPage, setListingsPerPage] = useState(5);

  useEffect(() => {
    setLoading(true);
    if (props.listings) {
      setLoading(false);
    }
  }, []);

  const indexOfLastListing = currentPage * listingsPerPage;
  const indexOfFirstListing = indexOfLastListing - listingsPerPage;
  const currentlistings = props.listings.slice(
    indexOfFirstListing,
    indexOfLastListing
  );

  // Change Page

  const paginate = (pageNumber) => setCurrentPage(pageNumber);

  return (
    <div>
      <h2>Listings</h2>
      <hr></hr>
      {console.log("I have listings", props.listings)}

      <ListingsList listings={currentlistings} loading={loading} />
      <JobsPagination
        listingsPerPage={listingsPerPage}
        totalListings={props.listings.length}
        paginate={paginate}
      />
    </div>
  );
}

function mapStateToProps({ listings }) {
  return { listings };
}

export default connect(mapStateToProps, { fetchListing })(ListingsPage);
