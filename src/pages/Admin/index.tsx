import React from "react";
import { BaseLayout, Button } from "../../components";
import styles from "./index.module.css";

export const AdminPage = () => {
  return (
    <BaseLayout>
      <div className={styles.options}>
        <Button label="Criar novo evento" onClick={() => null} />
        <Button label="Baixar listar de presença" onClick={() => null} />
      </div>
    </BaseLayout>
  );
};
