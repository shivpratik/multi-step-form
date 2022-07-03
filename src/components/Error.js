import React from "react";

const Error = ({ prevStep, clearState }) => {
  const Previous = (e) => {
    e.preventDefault();
    prevStep(1);
    clearState();
  };
  return (
    <div className="container">
      <div className="row">
        <div className="jumbo-box text-center">
          <h1>Ooops</h1>
          <p>
            Your age is over our accepted limit.
            <br />
            We are sorry but we cannot insure you now.
          </p>
          <button className="btn btn-primary" type="submit" onClick={Previous}>
            Ok :(
          </button>
        </div>
      </div>
    </div>
  );
};

export default Error;
