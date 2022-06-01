import React, { useState } from "react";
import { BaseLayout, InputOTP, Button } from "../../components";
import { ReactComponent as Logo } from "../../assets/logo.svg";
import styles from "./index.module.css";
import { useNavigate } from "react-router-dom";

export const EventPage: React.FC = () => {
  const [pin, setPin] = useState("");

  const navigate = useNavigate();

  const handleConfirm = async () => {
    navigate(`/checkin/${pin}`);
  };

  return (
    <BaseLayout>
      <section className={styles.eventPage}>
        <Logo />
        <div className={styles.otpContainer}>
          <h1>PIN do evento:</h1>
          <InputOTP state={pin} setState={setPin} />
        </div>
        <Button label="Validar" onClick={() => handleConfirm()} />
      </section>
    </BaseLayout>
  );
};
