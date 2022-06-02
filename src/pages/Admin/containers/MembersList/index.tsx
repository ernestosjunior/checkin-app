import React, { useState } from "react";
import { BaseLayout, Button, InputOTP } from "../../../../components";
import styles from "./index.module.css";
import { ReactComponent as Logo } from "../../../../assets/logo.svg";
import { getListMembers } from "../../../../services/api";
import { toast } from "react-toastify";
import { jsPDF } from "jspdf";
import arrow from "../../../../assets/arrowBack.svg";
import ReactLoading from "react-loading";

interface MembersListProps {
  setContainer: (state: string) => void;
}

export const MembersList: React.FC<MembersListProps> = ({ setContainer }) => {
  const [pin, setPin] = useState("");
  const [loading, setLoading] = useState(false);

  const handleList = async () => {
    try {
      setLoading(true);
      const res = await getListMembers({ eventPin: pin });

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

      const doc = new jsPDF();
      res.data.map((member: any, index: number) =>
        doc.text(`${index + 1} . ${member.name}`, 20, 20)
      );
      doc.save(`event-${pin}.pdf`);
    } catch (error) {
    } finally {
      setLoading(false);
    }
  };

  return (
    <BaseLayout>
      <div className={styles.membersList}>
        <img
          src={arrow}
          className={styles.buttonBack}
          alt="Botao de retorno"
          onClick={() => setContainer("")}
        />
        <Logo />
        <div className={styles.otpContainer}>
          <h1>PIN do evento:</h1>
          <InputOTP state={pin} setState={setPin} />
        </div>
        <Button
          label={
            !loading ? (
              "Baixar lista de presentes"
            ) : (
              <ReactLoading
                color="#FFFFFF"
                height="unset"
                width={"12%"}
                type="spin"
              />
            )
          }
          onClick={() => handleList()}
          disabled={!pin || loading}
        />
      </div>
    </BaseLayout>
  );
};
