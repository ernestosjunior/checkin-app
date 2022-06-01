import React from "react";
import OtpInput from "react-otp-input";
import styles from "./index.module.css";

interface InputOTPProps {
  state: string;
  setState: (state: string) => void;
}

export const InputOTP: React.FC<InputOTPProps> = ({ state, setState }) => {
  const handleChange = (otp: string) => setState(otp);

  return (
    <OtpInput
      value={state}
      onChange={handleChange}
      numInputs={6}
      isInputNum
      containerStyle={styles.containerInput}
    />
  );
};
