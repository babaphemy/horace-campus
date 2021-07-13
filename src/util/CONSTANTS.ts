export const BASE_URL: string =
  process.env.NODE_ENV === "production" ? "" : "http://localhost:5071/";
export const POST_SETTINGS = (obj: any) => {
  return {
    method: "POST",
    headers: {
      Accept: "application/json",
      "Content-Type": "application/json",
      Authorization: `Basic ${process.env.REACT_APP_AUTH}`,
    },
    body: JSON.stringify(obj),
  };
};
export const AUTH = {
  headers: { Authorization: `Basic ${process.env.REACT_APP_AUTH}` },
};
