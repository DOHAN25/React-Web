export const API_URL =
  process.env.NODE_ENV === "production"
    ? "https://react-web-server.herokuapp.com"
    : "http://localhost:8080";
