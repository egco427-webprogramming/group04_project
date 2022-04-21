import axios from "axios";

// work in local
const URL = "https://fakestoreapi.com/users";

const httpClient = axios.create({
  baseURL: URL,
});

export async function getUser(id) {
  return (await httpClient.get("/" + id)).data;
}
export async function updateUser(id, user) {
  return (await httpClient.post("/" + id, user)).data;
}
