import axios from "axios";
import {
  FETCH_LISTING,
  FETCH_USER,
  FETCH_ZIPS,
  FETCH_FIELDS,
  FETCH_SUBS,
} from "./types";

export const fetchUser = () => {
  return function (dispatch) {
    axios
      .get("/api/current_user")
      .then((res) => dispatch({ type: FETCH_USER, payload: res.data }));
  };
};

// dispatches to reducer fetch listing
export const fetchListing = () => {
  return function (dispatch) {
    axios.get("/api/listings").then((res) => {
      dispatch({ type: FETCH_LISTING, payload: res.data });
    });
  };
};

export const handleToken = (token) => {
  return function (dispatch) {
    axios
      .post("/api/stripe", token)
      .then((res) => dispatch({ type: FETCH_USER, payload: res.data }));
  };
};

export const createListing = (listingData) => {
  return function (dispatch) {
    console.log("Creating Listing");
    axios.post("/api/listings", listingData).then((res) => {
      dispatch({ type: FETCH_USER, payload: res.data });
    });
  };
};

// dispatches to reducer fetch listing
export const fetchAllListings = () => {
  return function (dispatch) {
    axios.get("/api/listings/all").then((res) => {
      dispatch({ type: FETCH_LISTING, payload: res.data });
    });
  };
};

export const submitApplication = (values, formName) => {
  return function (dispatch) {
    axios.post(`/api/submissions/${formName}`, values).then((res) => {
      dispatch({ type: FETCH_USER, payload: res.data });
    });
  };
};
// dispatches to reducer fetch listing
export const fetchApplication = () => {
  return function (dispatch) {
    axios.get("/api/applications").then((res) => {
      dispatch({ type: FETCH_LISTING, payload: res.data });
    });
  };
};

export const createCheckoutSession = (data) => {
  return function (dispatch) {
    // stringify data before you get to this action
    axios.post("/api/create-checkout-session", data).then((res) => {
      dispatch({ type: FETCH_USER, payload: res.data });
    });
  };
};

export const fetchZipCodes = () => {
  return function (dispatch) {
    axios.get("/api/zipcodes").then((res) => {
      console.log("dispatch");
      dispatch({ type: FETCH_ZIPS, payload: res.data });
    });
  };
};

export const fetchForm = (formName) => {
  return function (dispatch) {
    axios.get(`/api/forms/${formName}`).then((res) => {
      dispatch({ type: FETCH_FIELDS, payload: res.data });
    });
  };
};

export const fetchSubmissions = () => {
  return function (dispatch) {
    axios.get("/api/list").then((res) => {
      dispatch({ type: FETCH_SUBS, payload: res.data });
    });
  };
};

export const login = (credentials) => {
  return function (dispatch) {
    axios.post("/api/login", credentials).then((res) => {
      dispatch({ type: FETCH_USER, payload: res.data });
    });
  };
};

export const register = (credentials) => {
  return function (dispatch) {
    axios.post("/api/register", credentials).then((res) => {
      dispatch({ type: FETCH_USER, payload: res.data });
    });
  };
};
