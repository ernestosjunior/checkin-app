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
