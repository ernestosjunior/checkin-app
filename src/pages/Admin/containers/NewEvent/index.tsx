import React, { useState } from "react";
import { BaseLayout, Input, Button } from "../../../../components";
import DateTimePicker from "react-datetime-picker";
import { ReactComponent as Logo } from "../../../../assets/logo.svg";
import styles from "./index.module.css";

export const NewEvent: React.FC = () => {
  const [value, onChange] = useState(new Date());
  return (
    <BaseLayout>
      <section className={styles.newEvent}>
        <Logo />
        <div className={styles.contentInputs}>
          <p>Nome do evento:</p>
          <Input />
        </div>
        <div className={styles.contentInputs}>
          <p>Tempo limite para registrar presença:</p>
          <DateTimePicker
            className={styles.datePicker}
            onChange={onChange}
            value={value}
            format={"dd-MM-yyyy HH:mm:ss"}
            locale={"pt-BR"}
            disableClock
          />
        </div>
        <Button label="Confirmar" onClick={() => null} />
      </section>
    </BaseLayout>
  );
};
