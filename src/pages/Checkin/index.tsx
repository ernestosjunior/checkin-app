import React, { useState } from "react";
import { BaseLayout, Input, Button } from "../../components";
import { ReactComponent as Logo } from "../../assets/logo.svg";
import styles from "./index.module.css";

export const CheckinPage: React.FC = () => {
  const [pin, setPin] = useState("");

  return (
    <BaseLayout>
      <section className={styles.eventPage}>
        <Logo />
        <div className={styles.otpContainer}>
          <h1>Seu nome:</h1>
          <Input />
        </div>
        <Button label="Registrar presença" onClick={() => null} />
      </section>
    </BaseLayout>
  );
};
