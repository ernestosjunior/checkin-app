import React, { Dispatch, SetStateAction } from "react";
import { BaseLayout, Input, Button } from "../../../../components";
import DateTimePicker from "react-datetime-picker";
import { ReactComponent as Logo } from "../../../../assets/logo.svg";
import arrow from "../../../../assets/arrowBack.svg";
import styles from "./index.module.css";
import ReactLoading from "react-loading";

interface NewEventProps {
  setContainer: (state: string) => void;
  value: Date;
  onChange: Dispatch<SetStateAction<Date>>;
  handleCreateEvent: () => void;
  name: string;
  setName: Dispatch<SetStateAction<string>>;
  loading: boolean;
}

export const NewEvent: React.FC<NewEventProps> = ({
  setContainer,
  value,
  onChange,
  handleCreateEvent,
  name,
  setName,
  loading,
}) => {
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
          <Input value={name} onChange={setName} />
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
        <Button
          disabled={loading || !name}
          label={
            !loading ? (
              "Confirmar"
            ) : (
              <ReactLoading
                color="#FFFFFF"
                height="unset"
                width={"12%"}
                type="spin"
              />
            )
          }
          onClick={() => handleCreateEvent()}
        />
      </section>
    </BaseLayout>
  );
};
