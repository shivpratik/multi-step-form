import React, { useState, useEffect } from "react";
import Welcome from "./Welcome";
import UserDetails from "./UserDetails";
import Summary from "./Summary";
import Error from "./Error";

const InsuranceForm = () => {
  // Initial States
  const initialState = {
    name: "",
    age: "",
    country: "",
    plan: "0",
  };
  // Set States
  const [values, setValues] = useState(initialState);
  const [step, setStep] = useState(1);
  const [currency, setCurrency] = useState("");
  const [safe, setSafe] = useState(0);
  const [superSafe, setSuperSafe] = useState(0);
  const [premium, setPremium] = useState(0);
  // Previous Step
  const prevStep = (page) => {
    if (page) {
      setStep(page);
    } else {
      setStep((step) => step - 1);
    }
  };
  // Next Step
  const nextStep = (page) => {
    if (page) {
      setStep(page);
    } else {
      setStep((step) => step + 1);
    }
  };
  const clearState = () => {
    setValues({ ...initialState });
  };
  // Handle Field Change
  const handleChange = (input) => (e) => {
    setValues({ ...values, [input]: e.target.value });
  };

  useEffect(() => {
    // Calculate Premium
    const calculatePremium = (values) => {
      const { age, country, plan } = values;
      const amount = 10 * parseInt(age) * parseInt(country);
      if (plan) {
        setPremium(amount + amount * (plan / 100));
      } else {
        setPremium(amount);
      }
      setSafe(10 * parseInt(age) * parseInt(country) * 0.5);
      setSuperSafe(10 * parseInt(age) * parseInt(country) * 0.75);
    };
    if (values.country) {
      switch (parseInt(values.country)) {
        case 1:
          console.log("HKD");
          setCurrency("HKD");
          break;
        case 2:
          console.log("USD");
          setCurrency("USD");
          break;
        case 3:
          console.log("AUD");
          setCurrency("AUD");
          break;
        default:
          console.log("Blank");
          setCurrency("");
      }
    }
    if (values.age || values.country || values.plan) {
      calculatePremium(values);
    }
  }, [values, setCurrency, setPremium]);

  switch (step) {
    case 1:
      return <Welcome nextStep={nextStep} />;
    case 2:
      return (
        <UserDetails
          prevStep={prevStep}
          nextStep={nextStep}
          handleChange={handleChange}
          values={values}
          currency={currency}
          safe={safe}
          superSafe={superSafe}
          premium={premium}
        />
      );
    case 3:
      if (values.age > 100) {
        return <Error prevStep={prevStep} clearState={clearState} />;
      } else {
        return (
          <Summary
            prevStep={prevStep}
            clearState={clearState}
            values={values}
            currency={currency}
            premium={premium}
          />
        );
      }
    default:
    // do nothing
  }
};

export default InsuranceForm;
