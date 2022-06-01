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
