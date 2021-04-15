import { Box, Button, StepLabel, Stepper, Step } from "@material-ui/core";
import React, { useState } from "react";

const StepperComponent = (props) => {
  const { steps } = props;
  const [currentStep, changeStep] = useState(0);

  //based on https://material-ui.com/components/steppers/
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
      <Stepper activeStep={currentStep}>
        {steps.map((label, index) => {
          return (
            <Step>
              <StepLabel>{label[0]}</StepLabel>
            </Step>
          );
        })}
      </Stepper>
      <Box display="flex">{getStepContent(currentStep)}</Box>
      <Box display="flex" justifyContent="flex-end">
        <Button onClick={handleBack} variant="outlined">
          Back
        </Button>
        <Button onClick={handleNext} variant="outlined" color="primary">
          Next
        </Button>
      </Box>
    </>
  );
};
export default StepperComponent;
