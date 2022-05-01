import axios from "axios";

// deployed api
const URL = "https://lucienshop3212.herokuapp.com/carts";
// my local api
// const URL = "http://localhost:5000/carts";

const httpClient = axios.create({
  baseURL: URL,
});

export async function getCart(id) {
  return (await httpClient.get("/" + id)).data;
}

export async function updateCart(id, items) {
  return (
    await httpClient.post("/" + id, {
      items: items.map(({ id, amount }) => ({ item: id, unit: amount })),
    })
  ).data;
}
