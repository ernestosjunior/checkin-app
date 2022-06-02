import React from "react";
import styles from "./index.module.css";

interface ButtonProps {
  label: string;
  onClick: () => void;
  disabled?: boolean;
}

export const Button: React.FC<ButtonProps> = ({
  label,
  onClick,
  disabled = false,
}) => {
  return (
    <button onClick={onClick} className={styles.button} disabled={disabled}>
      {label}
    </button>
  );
};
