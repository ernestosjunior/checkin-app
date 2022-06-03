import React, { useState } from "react";
import { BaseLayout, InputOTP, Button } from "../../components";
import { ReactComponent as Logo } from "../../assets/logo.svg";
import styles from "./index.module.css";
import { useNavigate } from "react-router-dom";
import { validatePin } from "../../services/api";
import { toast } from "react-toastify";
import arrow from "../../assets/arrowBack.svg";
import ReactLoading from "react-loading";

export const EventPage: React.FC = () => {
  const [loading, setLoading] = useState(false);
  const [pin, setPin] = useState("");

  const navigate = useNavigate();

  const handleConfirm = async () => {
    try {
      setLoading(true);
      const res = await validatePin({ eventPin: pin });

      if (!res.success)
        return toast.error(res.error, {
          position: "top-right",
          autoClose: 5000,
          hideProgressBar: false,
          closeOnClick: true,
          pauseOnHover: true,
          draggable: true,
          progress: undefined,
        });

      navigate(`/checkin/${pin}`);
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
          onClick={() => navigate("/")}
        />
        <Logo />
        <div className={styles.otpContainer}>
          <h1>PIN do evento:</h1>
          <InputOTP state={pin} setState={setPin} />
        </div>
        <Button
          label={
            !loading ? (
              "Validar"
            ) : (
              <ReactLoading
                color="#FFFFFF"
                height="unset"
                width={"12%"}
                type="spin"
              />
            )
          }
          onClick={() => handleConfirm()}
          disabled={!pin || loading}
        />
      </section>
    </BaseLayout>
  );
};
