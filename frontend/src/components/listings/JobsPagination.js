import React, { Component } from "react";
import { Pagination } from "react-bootstrap";

export const JobsPagination = ({
  listingsPerPage,
  totalListings,
  paginate,
}) => {
  const pageNumbers = [];

  for (var i = 1; i <= Math.ceil(totalListings / listingsPerPage); i++) {
    pageNumbers.push(i);
  }

  return (
    <nav style={{ height: "50px" }}>
      <ul className="pagination">
        {pageNumbers.map((number) => {
          return (
            <li key={number} className="page-item">
              <a
                onClick={() => paginate(number)}
                href="#"
                className="page-link"
              >
                {number}
              </a>
            </li>
          );
        })}
      </ul>
    </nav>
  );
};

export default JobsPagination;
