import React, { useState } from "react";
import { BaseLayout, Button, InputOTP } from "../../../../components";
import styles from "./index.module.css";
import { ReactComponent as Logo } from "../../../../assets/logo.svg";

interface MembersListProps {
  setContainer: (state: string) => void;
}

export const MembersList: React.FC<MembersListProps> = ({ setContainer }) => {
  const [pin, setPin] = useState("");
  return (
    <BaseLayout>
      <div className={styles.membersList}>
        <Logo />
        <div className={styles.otpContainer}>
          <h1>PIN do evento:</h1>
          <InputOTP state={pin} setState={setPin} />
        </div>
        <Button
          label="Baixar lista de presentes"
          onClick={() => setContainer("")}
        />
      </div>
    </BaseLayout>
  );
};
