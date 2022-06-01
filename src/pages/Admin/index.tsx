import React, { useState } from "react";
import { BaseLayout, Button } from "../../components";
import styles from "./index.module.css";
import { NewEvent } from "./containers";
import { ReactComponent as Logo } from "../../assets/logo.svg";
import { ReactComponent as Success } from "../../assets/success.svg";

export const AdminPage = () => {
  const [container, setContainer] = useState("success");

  if (container === "newEvent") {
    return <NewEvent setContainer={setContainer} />;
  }

  if (container === "success") {
    return (
      <BaseLayout>
        <div className={styles.success}>
          <Success />
          <Button label="Ok" onClick={() => setContainer("Fim")} />
        </div>
      </BaseLayout>
    );
  }

  return (
    <BaseLayout>
      <div className={styles.options}>
        <Logo />
        <Button
          label="Criar novo evento"
          onClick={() => setContainer("newEvent")}
        />
        <Button
          label="Baixar listar de presença"
          onClick={() => setContainer("getList")}
        />
      </div>
    </BaseLayout>
  );
};
