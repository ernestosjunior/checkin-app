import React, { useState } from "react";
import { BaseLayout, Button } from "../../components";
import styles from "./index.module.css";
import { NewEvent } from "./containers";

export const AdminPage = () => {
  const [container, setContainer] = useState("");

  if (container === "newEvent") {
    return <NewEvent />;
  }

  return (
    <BaseLayout>
      <div className={styles.options}>
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
