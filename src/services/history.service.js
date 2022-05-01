import axios from "axios";

// deployed api
const URL = "https://lucienshop3198.herokuapp.com/history";
// my local api
// const URL = "http://localhost:5000/history";

import { toBackendCart, toFrontendCart } from "../util";

const httpClient = axios.create({
  baseURL: URL,
});

export async function getHistory(id) {
  return (await httpClient.get("/id/" + id)).data.map(
    ({ items, ...other }) => ({ items: toFrontendCart(items), ...other })
  );
}
export async function addHistory({ items = [], uid, price }) {
  return (
    await httpClient.post("/purchased", {
      items: toBackendCart(items),
      uid,
      price,
      date: Date.now(),
    })
  ).data;
}
