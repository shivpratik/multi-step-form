import React from "react";

const UserDetails = ({
  prevStep,
  nextStep,
  handleChange,
  values,
  currency,
  safe,
  superSafe,
  premium,
}) => {
  const Continue = (e) => {
    e.preventDefault();
    nextStep();
  };
  const Previous = (e) => {
    e.preventDefault();
    prevStep();
  };
  return (
    <div className="container">
      <div className="row">
        <div className="jumbo-box text-center">
          <h1>Tell us about yourself</h1>
          <div className="control-group">
            <input
              type="text"
              value={values.name}
              onChange={handleChange("name")}
              required
            />
            <label htmlFor="input">Full Name</label>
          </div>
          <div className="control-group">
            <input
              type="text"
              value={values.age}
              onChange={handleChange("age")}
              required
            />
            <label htmlFor="input">Age</label>
          </div>
          <div className="control-group select">
            <select
              value={values.country}
              onChange={handleChange("country")}
              required
            >
              <option value="">Where do you live?</option>
              <option value="1">Hong Kong</option>
              <option value="2">USA</option>
              <option value="3">Australia</option>
            </select>
          </div>
          {values.country && values.age && (
            <div className="control-group">
              <div className="radio radio-inline">
                <input
                  id="radio1"
                  type="radio"
                  name="plan"
                  checked={values.plan === "0"}
                  onChange={handleChange("plan")}
                  value="0"
                />
                <label htmlFor="radio1">Standard</label>
              </div>
              <div className="radio radio-inline">
                <input
                  id="radio2"
                  type="radio"
                  name="plan"
                  checked={values.plan === "50"}
                  onChange={handleChange("plan")}
                  value="50"
                />
                <label htmlFor="radio2">
                  Safe (+{safe}
                  {currency}, 50%)
                </label>
              </div>
              <div className="radio radio-inline">
                <input
                  id="radio3"
                  type="radio"
                  name="plan"
                  checked={values.plan === "75"}
                  onChange={handleChange("plan")}
                  value="75"
                />
                <label htmlFor="radio3">
                  Super Safe (+{superSafe}
                  {currency}, 75%)
                </label>
              </div>
            </div>
          )}
          {values.country && values.age && values.plan && (
            <h2>
              Your Premium: {premium}
              {currency}
            </h2>
          )}
          <div className="btn-group">
            <button
              className="btn btn-outline"
              type="submit"
              onClick={Previous}
            >
              Back
            </button>
            {values.name && values.age && values.country && values.plan ? (
              <button
                className="btn btn-primary"
                type="submit"
                onClick={Continue}
              >
                Next
              </button>
            ) : (
              <button className="btn btn-primary" type="button" disabled>
                Next
              </button>
            )}
          </div>
        </div>
      </div>
    </div>
  );
};

export default UserDetails;
