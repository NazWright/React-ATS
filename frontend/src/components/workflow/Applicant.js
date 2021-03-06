import React, { useEffect } from "react";
import { fetchSubmissions, fetchListing } from "../../actions";
import { connect, useDispatch } from "react-redux";
import { Button, Container } from "react-bootstrap";

export const Applicant = (props) => {
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(fetchSubmissions());
  }, []);

  function filterSubs() {
    return props.subs.filter(
      (submission) => submission._id === props.match.params.id
    );
  }
  return (
    <div className="float-container">
      {props.subs
        .filter((submission) => submission._id === props.match.params.id)
        .map((submission, index) => {
          return (
            <h1>
              Application For{" "}
              {submission.values.first + " " + submission.values.last}
            </h1>
          );
        })}
      <div className="float-child">
        <table className="table table-striped table-hover">
          <thead>
            <tr>
              <th>Field</th>
              <th>Entry</th>
            </tr>
          </thead>
          <tbody>
            {props.subs
              .filter((submission) => submission._id === props.match.params.id)
              .map((item, index) => {
                return Object.keys(item.values).map((itemkey, indexkey) => {
                  return (
                    <tr>
                      <td>{itemkey}</td>
                      <td>{item.values[itemkey]}</td>
                    </tr>
                  );
                });
              })}
          </tbody>
        </table>
      </div>
      <div className="float-child">
        <Container>
          <form>
            <textarea rows={4} cols={50} placeholder="Enter Notes Here" />
            <Button>Approve Application</Button>
            <Button>Decline Application</Button>
          </form>
        </Container>
      </div>
    </div>
  );
};

function mapStateToProps({ subs, listings }) {
  return { subs, listings };
}

export default connect(mapStateToProps, { fetchSubmissions, fetchListing })(
  Applicant
);
