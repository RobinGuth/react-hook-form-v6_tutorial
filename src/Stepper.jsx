import { Box, StepLabel, Stepper, Step } from "@material-ui/core";
import React, { useState } from "react";

const StepperComponent = (props) => {
  const { steps } = props;
  const [currentStep, changeStep] = useState(0);

  //based on https://material-ui.com/components/steppers/
  const getSteps = () => {
    return [
      "Form with html inputs",
      "Form with material ui components",
      "Try it yourself"
    ];
  };
  const getStepContent = (step) => {
    return steps[step][1];
  };

  const handleNext = () => {
    if (currentStep < steps.length - 1) {
      changeStep((prevStep) => prevStep + 1);
    }
  };

  const handleBack = () => {
    if (currentStep > 0) {
      changeStep((prevStep) => prevStep - 1);
    }
  };

  return (
    <>
      <Stepper>
        {steps.map((label, index) => {
          return (
            <Step>
              <StepLabel>{label[0]}</StepLabel>
            </Step>
          );
        })}
      </Stepper>
      <Box display="flex"></Box>
    </>
  );
};
export default StepperComponent;
