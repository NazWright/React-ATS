import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import { CssBaseline } from "@material-ui/core";
import LandingImage from "../assets/landingBackground.jpg";
import BSForm from "react-bootstrap/Form";
import { Row, Col, Button } from "react-bootstrap";
import * as FaIcons from "react-icons/fa";
import * as IoIcons from "react-icons/io";
import * as AiIcons from "react-icons/ai";
// populate dropdown from a list of job categories

const useStyles = makeStyles((theme) => ({
  root: {
    minHeight: "100vh",
    backgroundImage: `url(${LandingImage})`,
    backgroundRepeat: "no-repeat",
    backgroundSize: "cover",
  },
}));
export default function Landing() {
  const classes = useStyles();
  return (
    <div>
      <div className={classes.root}>
        <div className="image-box__overlay">
          <Row>
            <h1 className="white-color-text"> Find a Job</h1>
          </Row>
          <Row>
            <h2 className="white-color-text">
              {" "}
              Look for an amazing opportunity in your area
            </h2>
          </Row>
          <Row>
            <BSForm className="add-half-width">
              <div className="m-b-10">
                <BSForm.Label className="white-color-text">
                  <IoIcons.IoMdBusiness size={25} color="white" />
                  What type of job are you looking for?
                </BSForm.Label>
                <BSForm.Control
                  as="input"
                  placeholder="Enter Job title or Skill"
                  type="text"
                ></BSForm.Control>
              </div>
              <div className="m-b-10">
                <BSForm.Label className="white-color-text">
                  {" "}
                  <FaIcons.FaMapMarkerAlt size={25} color="white" /> Where?
                </BSForm.Label>
                <BSForm.Control
                  as="input"
                  placeholder="Enter City, State, or Zip Code"
                  type="text"
                ></BSForm.Control>
              </div>
              <div className="m-b-10">
                <BSForm.Label className="white-color-text">
                  <AiIcons.AiFillTags size={25} color="white" /> Tags
                </BSForm.Label>
                <BSForm.Control as="select"></BSForm.Control>
              </div>
              <BSForm.Text className="white-color-text">
                Select from the available tags to recieve tailored results
              </BSForm.Text>
              <Row>
                <Button>Search Open Jobs</Button>
              </Row>
              <h5 className="white-color-text">
                Want more advanced search options?{" "}
                <a href="#">Advanced Search</a>
              </h5>
            </BSForm>
          </Row>
        </div>
        <CssBaseline />
      </div>
      <div>yo</div>
    </div>
  );
}
