import React, { useState } from "react";
import { BaseLayout, Input, Button } from "../../../../components";
import DateTimePicker from "react-datetime-picker";
import { ReactComponent as Logo } from "../../../../assets/logo.svg";
import arrow from "../../../../assets/arrowBack.svg";

import styles from "./index.module.css";

interface NewEventProps {
  setContainer: (state: string) => void;
}

export const NewEvent: React.FC<NewEventProps> = ({ setContainer }) => {
  const [value, onChange] = useState(new Date());
  return (
    <BaseLayout>
      <section className={styles.newEvent}>
        <img
          src={arrow}
          className={styles.buttonBack}
          alt="Botao de retorno"
          onClick={() => setContainer("")}
        />
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
