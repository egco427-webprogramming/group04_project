import axios from "axios";

// work in local
const URL = "https://fakestoreapi.com/carts";

const httpClient = axios.create({
  baseURL: URL,
});

export async function getCart(id) {
  return (await httpClient.get("/" + id)).data;
}
