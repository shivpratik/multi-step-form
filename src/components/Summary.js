import React from "react";

const Summary = ({ prevStep, clearState, values, currency, premium }) => {
  const { name, age, country, plan } = values;
  const Buy = (e) => {
    e.preventDefault();
    prevStep(1);
    clearState();
  };
  const Previous = (e) => {
    e.preventDefault();
    prevStep();
  };
  // Set Place Name
  let place;
  switch (parseInt(country)) {
    case 1:
      place = "Hong Kong";
      break;
    case 2:
      place = "USA";
      break;
    case 3:
      place = "Australia";
      break;
    default:
      place = "";
  }
  // Set Plan Name
  let planName;
  switch (parseInt(plan)) {
    case 0:
      planName = "Standard";
      break;
    case 50:
      planName = "Safe";
      break;
    case 75:
      planName = "Super Safe";
      break;
    default:
      planName = "";
  }
  return (
    <div className="container">
      <div className="row">
        <div className="jumbo-box text-center">
          <h1>Summary</h1>
          <table className="table" cellSpacing={0} cellPadding={14}>
            <tbody>
              <tr className="text-left">
                <th>Full Name</th>
                <td>{name}</td>
              </tr>
              <tr className="text-left">
                <th>Age</th>
                <td>{age}</td>
              </tr>
              <tr className="text-left">
                <th>Where do you live</th>
                <td>{place}</td>
              </tr>
              <tr className="text-left">
                <th>Package</th>
                <td>{planName}</td>
              </tr>
              <tr className="text-left">
                <th>Premium</th>
                <td>
                  {premium}
                  {currency}
                </td>
              </tr>
            </tbody>
          </table>
          <div className="btn-group">
            <button
              className="btn btn-outline"
              type="submit"
              onClick={Previous}
            >
              Back
            </button>
            <button className="btn btn-primary" type="submit" onClick={Buy}>
              Buy
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Summary;
