import React, { useEffect, useState } from "react";
import "../css/ListingForm.css";

export default function ListingForm() {
  useEffect(() => {
    // make ajax request for the states
  });

  const selectAll = (event) => {
    if (event && event.target) {
      event.target.checked = !event.target.checked;
      const checkboxes = document.querySelectorAll("input[type=checkbox]");
      checkboxes.forEach((checkbox) => {
        // select or deselect all selections
        if (checkbox.name !== "Other") {
          checkbox.checked = !checkbox.checked;
        }
      });
    }
  };

  return (
    <div className="container mainContainer">
      <form>
        <div className="form-group">Job Information</div>

        <hr />

        <div className="form-group">
          <label for="addListing_Title" className="control-label">
            Title
          </label>
          <input
            type="text"
            name="addListing_Title"
            className="form-control"
            id="addListing_Title"
            value=""
            maxLength="100"
            required
            oninvalid="this.setCustomValidity('Invalid title name')"
            oninput="this.setCustomValidity('')"
          />
        </div>

        <div className="form-group">
          <label for="addListing_Description" class="control-label">
            Description
          </label>
          <textarea
            id="addListing_Description"
            className="form-control"
            name="addListing_Description"
            rows="7"
            required
          ></textarea>
        </div>

        <div className="form-group">
          <label for="Compensation" className="control-label">
            Compensation
          </label>
          <input
            type="text"
            name="Compensation"
            className="form-control"
            id="Compensation"
            value=""
            maxLength="100"
            required
            pattern="[0-9]+"
          />
        </div>

        <div className="form-group">
          <label for="Benefits_Offered" class="control-label">
            Benefits Offered
          </label>
          <input
            type="text"
            name="Benefits_Offered"
            className="form-control"
            id="Benefits_Offered"
            value=""
            maxLength="100"
            required
          />
        </div>

        <div className="form-group">
          <label for="Job_Type" class="control-label">
            Job Type
          </label>
          <div className="checkbox">
            <label>
              <input
                type="checkbox"
                name="Select_All"
                value="all"
                className="checkbox"
                onClick={(event) => selectAll(event)}
              />{" "}
              Select All
            </label>
            <br />
            <label>
              <input
                type="checkbox"
                name="Contractor"
                value="contractor"
                className="checkbox"
              />{" "}
              Contractor
            </label>
            <br />
            <label>
              <input
                type="checkbox"
                name="FullTime"
                value="full-time"
                className="checkbox"
              />{" "}
              Full-Time
            </label>
            <br />
            <label>
              <input
                type="checkbox"
                name="PartTime"
                value="part-time"
                className="checkbox"
              />{" "}
              Part-Time
            </label>
            <br />
            <label>
              <input
                type="checkbox"
                name="Freelancer"
                value="freelancer"
                className="checkbox"
              />{" "}
              Freelancer
            </label>
            <br />
            <label>
              <input
                type="checkbox"
                name="Temporary"
                value="temporary"
                className="checkbox"
              />{" "}
              Temporary
            </label>
            <br />
            <label>
              <input
                type="checkbox"
                name="Other"
                value="other"
                className="checkbox"
              />{" "}
              Other
            </label>
            <br />
          </div>
        </div>

        <div className="form-group">
          <label for="Category" className="control-label">
            Category
          </label>
          <select
            id="Category"
            name="Category"
            className="form-control"
            size="1"
            required
            oninvalid="this.setCustomValidity('Select a Category')"
            oninput="this.setCustomValidity('')"
          >
            <option disabled hidden>
              Select a category...
            </option>
            <option value="14">Call Center</option>
            <option value="23">Corporate</option>
            <option value="19">Customer Service</option>
            <option value="15">Education</option>
            <option value="12">Financial</option>
            <option value="16">Food Service</option>
            <option value="22">Government</option>
            <option value="11">Hospitality</option>
            <option value="17">Light Industrial</option>
            <option value="10">Manufacturing</option>
            <option value="21">Mental Health</option>
            <option value="13">Municipal</option>
            <option value="34">Pool</option>
            <option value="20">Technology</option>
            <option value="18">Warehousing</option>
          </select>
        </div>

        <div className="form-group">
          <label for="Skills_Required" className="control-label">
            Skills Required
          </label>
          <select
            id="Skills_Required"
            name="Skills_Required"
            className="form-control"
            size="1"
            required
          >
            <option></option>
          </select>{" "}
          select all the skills that are required for this job
        </div>

        <div className="form-group">
          <label for="Equip_Required" className="control-label">
            Equipment Required
          </label>
          <select
            id="Equip_Required"
            name="Equip_Required"
            className="form-control"
            size="1"
            required
          >
            <option></option>
          </select>{" "}
          select all the equipment that is required for this job
        </div>

        <div className="form-group">Company Information</div>

        <hr />

        <div className="form-group">
          <label for="Company_Name" className="control-label">
            Company Name
          </label>
          <input
            type="text"
            name="Company_Name"
            className="form-control"
            id="Company_Name"
            value=""
            maxLength="100"
            required
            oninvalid="this.setCustomValidity('Invalid company name')"
            oninput="this.setCustomValidity('')"
          />
        </div>

        <div className="form-group">
          <label for="Website" className="control-label">
            Website
          </label>
          <input
            type="text"
            name="Website"
            className="form-control"
            id="Website"
            value=""
            maxLength="100"
            required
            oninvalid="this.setCustomValidity('Invalid web address')"
            oninput="this.setCustomValidity('')"
          />
        </div>

        <div className="form-group">
          <label for="Logo" className="control-label form-control-file">
            Logo
          </label>
          <input id="Logo" name="Logo" className="input-file" type="file" />
        </div>
        <div className="form-group">Location</div>

        <hr />

        <div className="form-group">
          <label for="Country" className="control-label">
            Country
          </label>
          <select
            id="Country"
            name="Country"
            className="form-control"
            size="1"
            required
            oninvalid="this.setCustomValidity('Select a country')"
            oninput="this.setCustomValidity('')"
          >
            <option value="United States" selected>
              {" "}
              United States{" "}
            </option>
          </select>
        </div>

        <div className="form-group">
          <label for="State" className="control-label">
            State / Province / Region
          </label>
          <select
            id="State"
            name="State"
            className="form-control"
            size="1"
            required
            oninvalid="this.setCustomValidity('Select a state')"
            oninput="this.setCustomValidity('')"
          >
            <option></option>
          </select>
        </div>

        <div className="form-group">
          <label for="City" className="control-label">
            City
          </label>
          <select
            id="City"
            name="City"
            className="form-control"
            size="1"
            required
            oninvalid="this.setCustomValidity('Select a city')"
            oninput="this.setCustomValidity('')"
          >
            <option></option>
          </select>
        </div>

        <div className="form-group">
          <label for="Zip" className="control-label">
            Zip / Postal Code
          </label>
          <select
            id="Zip"
            name="Zip"
            className="form-control"
            size="1"
            required
            oninvalid="this.setCustomValidity('Select a zip')"
            oninput="this.setCustomValidity('')"
          >
            <option></option>
          </select>
        </div>

        <p className="textend"></p>

        <div className="form-group">
          <button type="submit" className="btn btn-success">
            Send
          </button>
          <button type="reset" className="btn btn-danger">
            Reset
          </button>
        </div>
      </form>
    </div>
  );
}

const setValiditiy = (validationMessage) => {};
