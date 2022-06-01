import React from "react";
import styles from "./index.module.css";
import { useNavigate } from "react-router-dom";

interface BaseLayoutProps {
  children: any;
}

export const BaseLayout: React.FC<BaseLayoutProps> = ({ children }) => {
  const isHome = window.location.pathname === "/";

  const navigate = useNavigate();

  return (
    <section className={styles.baseLayout}>
      {isHome && (
        <p
          className={styles.buttonAdmin}
          onClick={() => navigate("/gerenciar")}
        >
          Gerenciar
        </p>
      )}
      <main className={styles.container}>
        <section className={styles.box}>{children}</section>
      </main>
    </section>
  );
};
