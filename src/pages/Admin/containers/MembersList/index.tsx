import React, { useState } from "react";
import { BaseLayout, Button, InputOTP } from "../../../../components";
import styles from "./index.module.css";
import { ReactComponent as Logo } from "../../../../assets/logo.svg";
import { getListMembers } from "../../../../services/api";
import { toast } from "react-toastify";
import { jsPDF } from "jspdf";
import arrow from "../../../../assets/arrowBack.svg";

interface MembersListProps {
  setContainer: (state: string) => void;
}

export const MembersList: React.FC<MembersListProps> = ({ setContainer }) => {
  const [pin, setPin] = useState("");

  const handleList = async () => {
    try {
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
    } catch (error) {}
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
          label="Baixar lista de presentes"
          onClick={() => handleList()}
          disabled={!pin}
        />
      </div>
    </BaseLayout>
  );
};
