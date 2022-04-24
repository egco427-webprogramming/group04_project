import axios from "axios";

// fake api
// const URL = "https://fakestoreapi.com/users";
// my local api
const URL = "http://localhost:5000/history";

const httpClient = axios.create({
  baseURL: URL,
});

export async function getHistory(id) {
  return (await httpClient.get("/id/" + id)).data;
}
export async function addHistory({ items = [], uid, price }) {
  return (
    await httpClient.post("/purchased", { items, uid, price, date: Date.now() })
  ).data;
}
