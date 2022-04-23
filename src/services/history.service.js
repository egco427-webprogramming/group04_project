import axios from "axios";

// fake api
// const URL = "https://fakestoreapi.com/users";
// my local api
const URL = "http://localhost:5000";

const httpClient = axios.create({
  baseURL: URL,
});

export async function getHistory(id) {
  return (await httpClient.get("/history/" + id)).data;
}
