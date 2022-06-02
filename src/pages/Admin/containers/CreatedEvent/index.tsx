import React from "react";
import { BaseLayout, Button } from "../../../../components";
import styles from "./index.module.css";
import { ReactComponent as Logo } from "../../../../assets/logo.svg";

interface CreatedEventProps {
  event: any;
  setContainer: (state: string) => void;
}

export const CreatedEvent: React.FC<CreatedEventProps> = ({
  event,
  setContainer,
}) => {
  const pin = event.pin;

  return (
    <BaseLayout>
      <div className={styles.createdEvent}>
        <Logo />
        <div className={styles.containerPin}>
          <p>PIN do evento:</p>
          <h1>{`${pin[0]} ${pin[1]} ${pin[2]} ${pin[3]} ${pin[4]} ${pin[5]}`}</h1>
        </div>
        <Button label="Ok" onClick={() => setContainer("")} />
      </div>
    </BaseLayout>
  );
};
