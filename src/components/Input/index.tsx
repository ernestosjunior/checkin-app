import React from "react";
import styles from "./index.module.css";

interface InputProps {
  type?: string;
}

export const Input: React.FC<InputProps> = ({ type = "text" }) => {
  return <input type={type} className={styles.input} />;
};
