import axios from "axios";

// fake api
// const URL = "https://fakestoreapi.com/";
// my local api
const URL = "http://localhost:5000/carts";

const httpClient = axios.create({
  baseURL: URL,
});

// id that gen from firebase
// currentUser.providerData.uid
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
