import React, { useState } from "react";
import { BaseLayout, Input, Button } from "../../components";
import { ReactComponent as Logo } from "../../assets/logo.svg";
import { useParams, useNavigate } from "react-router-dom";
import { getIP, checkin } from "../../services/api";
import { toast } from "react-toastify";
import styles from "./index.module.css";
import { ReactComponent as Success } from "../../assets/success.svg";

export const CheckinPage: React.FC = () => {
  const [success, setSuccess] = useState(false);
  const [name, setName] = useState("");
  const { eventPin } = useParams();
  const navigate = useNavigate();

  console.log(eventPin);

  const handleCheckin = async () => {
    try {
      const ip = await getIP();

      if (!ip)
        return toast.error("Erro ao obter seu ip tente novamente.", {
          position: "top-right",
          autoClose: 5000,
          hideProgressBar: false,
          closeOnClick: true,
          pauseOnHover: true,
          draggable: true,
          progress: undefined,
        });

      const res = await checkin({ name, eventPin, ip });

      if (!res.success)
        return toast.error("Erro ao registrar presença. Teste novamente.", {
          position: "top-right",
          autoClose: 5000,
          hideProgressBar: false,
          closeOnClick: true,
          pauseOnHover: true,
          draggable: true,
          progress: undefined,
        });

      setSuccess(true);
      toast.success("Seu presença foi registrada com sucesso!", {
        position: "top-right",
        autoClose: 5000,
        hideProgressBar: false,
        closeOnClick: true,
        pauseOnHover: true,
        draggable: true,
        progress: undefined,
      });
    } catch (error) {}
  };

  if (success) {
    return (
      <BaseLayout>
        <div className={styles.successCheckin}>
          <Success />
          <Button label="Ok" onClick={() => navigate("/")} />
        </div>
      </BaseLayout>
    );
  }

  return (
    <BaseLayout>
      <section className={styles.eventPage}>
        <Logo />
        <div className={styles.otpContainer}>
          <h1>Seu nome:</h1>
          <Input value={name} onChange={setName} />
        </div>
        <Button label="Registrar presença" onClick={() => handleCheckin()} />
      </section>
    </BaseLayout>
  );
};
