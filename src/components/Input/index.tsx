import React, { Dispatch, SetStateAction } from "react";
import styles from "./index.module.css";

interface InputProps {
  type?: string;
  value: string;
  onChange: Dispatch<SetStateAction<string>>;
}

export const Input: React.FC<InputProps> = ({
  type = "text",
  value,
  onChange,
}) => {
  return (
    <input
      type={type}
      className={styles.input}
      value={value}
      onChange={(e) => onChange(e.target.value)}
    />
  );
};
