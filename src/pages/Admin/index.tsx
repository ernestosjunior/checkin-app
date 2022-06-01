import React, { useState } from "react";
import { BaseLayout, Button } from "../../components";
import styles from "./index.module.css";
import { NewEvent, CreatedEvent } from "./containers";
import { ReactComponent as Logo } from "../../assets/logo.svg";
import { ReactComponent as Success } from "../../assets/success.svg";
import { createEvent } from "../../services/api";
import { format } from "date-fns";
import axios from "axios";
import { toast } from "react-toastify";

function addMinutes(data: Date, mins: number) {
  return new Date(data.getTime() + mins * 60000);
}

export const AdminPage = () => {
  const [container, setContainer] = useState("");
  const [time, setTime] = useState(addMinutes(new Date(), 30));
  const [name, setName] = useState("");
  const [event, setEvent] = useState({});

  const getIP = async () => {
    const res = await axios.get("https://geolocation-db.com/json/");
    return res.data.IPv4;
  };

  const handleCreateEvent = async () => {
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

      const finishTime = format(time, "yyyy-MM-dd'T'HH:mm:ss");

      const res = await createEvent({ name, finishTime, ip });

      if (!res.success)
        return toast.error("Erro ao criar o evento.", {
          position: "top-right",
          autoClose: 5000,
          hideProgressBar: false,
          closeOnClick: true,
          pauseOnHover: true,
          draggable: true,
          progress: undefined,
        });

      setEvent(res.data);
      setContainer("success");
    } catch (error) {}
  };

  if (container === "newEvent") {
    return (
      <NewEvent
        setContainer={setContainer}
        value={time}
        onChange={setTime}
        handleCreateEvent={handleCreateEvent}
        name={name}
        setName={setName}
      />
    );
  }

  if (container === "success") {
    return (
      <BaseLayout>
        <div className={styles.success}>
          <Success />
          <Button label="Ok" onClick={() => setContainer("createdEvent")} />
        </div>
      </BaseLayout>
    );
  }

  if (container === "createdEvent") {
    return <CreatedEvent event={event} />;
  }

  return (
    <BaseLayout>
      <div className={styles.options}>
        <Logo />
        <Button
          label="Criar novo evento"
          onClick={() => setContainer("newEvent")}
        />
        <Button
          label="Baixar listar de presença"
          onClick={() => setContainer("getList")}
        />
      </div>
    </BaseLayout>
  );
};
