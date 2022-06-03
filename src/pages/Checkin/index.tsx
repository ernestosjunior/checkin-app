import React, { useState } from "react";
import { BaseLayout, Input, Button } from "../../components";
import { ReactComponent as Logo } from "../../assets/logo.svg";
import { useParams, useNavigate } from "react-router-dom";
import { getIP, checkin } from "../../services/api";
import { toast } from "react-toastify";
import styles from "./index.module.css";
import arrow from "../../assets/arrowBack.svg";
import ReactLoading from "react-loading";

export const CheckinPage: React.FC = () => {
  const [loading, setLoading] = useState(false);
  const [name, setName] = useState("");
  const { eventPin } = useParams();
  const navigate = useNavigate();

  const nameIsValid = name && name.trim().includes(" ");

  const handleCheckin = async () => {
    try {
      setLoading(true);
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

      if (!res.success) {
        navigate("/");
        toast.error(res.error, {
          position: "top-right",
          autoClose: 5000,
          hideProgressBar: false,
          closeOnClick: true,
          pauseOnHover: true,
          draggable: true,
          progress: undefined,
        });
        return null;
      }

      navigate("/");
      toast.success("Seu presença foi registrada com sucesso!", {
        position: "top-right",
        autoClose: 5000,
        hideProgressBar: false,
        closeOnClick: true,
        pauseOnHover: true,
        draggable: true,
        progress: undefined,
      });
    } catch (error) {
    } finally {
      setLoading(false);
    }
  };

  return (
    <BaseLayout>
      <section className={styles.eventPage}>
        <img
          src={arrow}
          className={styles.buttonBack}
          alt="Botao de retorno"
          onClick={() => navigate("/evento")}
        />
        <Logo />
        <div className={styles.otpContainer}>
          <h1>Seu nome e sobrenome:</h1>
          <Input value={name} onChange={setName} />
        </div>
        <Button
          label={
            !loading ? (
              "Registrar presença"
            ) : (
              <ReactLoading
                color="#FFFFFF"
                height="unset"
                width={"12%"}
                type="spin"
              />
            )
          }
          onClick={() => handleCheckin()}
          disabled={!nameIsValid || loading}
        />
      </section>
    </BaseLayout>
  );
};
