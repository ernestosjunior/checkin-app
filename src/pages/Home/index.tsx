import React from "react";
import { ReactComponent as Logo } from "../../assets/logo.svg";
import { BaseLayout, Button } from "../../components";
import styles from "./index.module.css";
import { useNavigate } from "react-router-dom";

export const HomePage: React.FC = () => {
  const navigate = useNavigate();

  return (
    <BaseLayout>
      <div className={styles.homePage}>
        <Logo />
        <Button label="Entrar" onClick={() => navigate("/evento")} />
      </div>
    </BaseLayout>
  );
};
