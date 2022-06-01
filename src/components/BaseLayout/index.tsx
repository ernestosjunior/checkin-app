import React from "react";
import styles from "./index.module.css";
import { useNavigate } from "react-router-dom";

interface BaseLayoutProps {
  children: any;
}

export const BaseLayout: React.FC<BaseLayoutProps> = ({ children }) => {
  const isHome = window.location.pathname === "/";
  const isManager = window.location.pathname === "/gerenciar";

  const navigate = useNavigate();

  return (
    <section className={styles.baseLayout}>
      {(isHome || isManager) && (
        <p
          className={styles.buttonAdmin}
          onClick={() => navigate(isHome ? "/gerenciar" : "/")}
        >
          {isHome ? "Gerenciar" : "Check-in"}
        </p>
      )}
      <main className={styles.container}>
        <section className={styles.box}>{children}</section>
      </main>
    </section>
  );
};
