import axios from "axios";

export const createEvent = async ({ name, finishTime, ip }) => {
  const response = await fetch(`${process.env.REACT_APP_API_URL}/event`, {
    method: "POST",
    headers: {
      accept: "application/json",
      "content-type": "application/json",
    },
    body: JSON.stringify({ name, finishTime, ip }),
  });
  const data = await response.json();
  return data;
};

export const checkin = async ({ name, ip, eventPin }) => {
  const response = await fetch(`${process.env.REACT_APP_API_URL}/checkin`, {
    method: "POST",
    headers: {
      accept: "application/json",
      "content-type": "application/json",
    },
    body: JSON.stringify({ name, eventPin, ip }),
  });
  const data = await response.json();
  return data;
};

export const getIP = async () => {
  const res = await axios.get("https://geolocation-db.com/json/");
  return res.data.IPv4;
};

export const getListMembers = async ({ eventPin }) => {
  const response = await fetch(
    `${process.env.REACT_APP_API_URL}/event/list/${eventPin}`,
    {
      method: "GET",
      headers: {
        accept: "application/json",
        "content-type": "application/json",
      },
    }
  );
  const data = await response.json();
  return data;
};
