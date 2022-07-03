import React from "react";

const Welcome = ({ nextStep }) => {
  const Continue = (e) => {
    e.preventDefault();
    nextStep();
  };
  return (
    <div className="container">
      <div className="row">
        <div className="jumbo-box text-center">
          <h1>Hello There!</h1>
          <p>Let's buy some insurance. It is going to take only a few steps</p>
          <button className="btn btn-primary" type="submit" onClick={Continue}>
            Start
          </button>
        </div>
      </div>
    </div>
  );
};

export default Welcome;
