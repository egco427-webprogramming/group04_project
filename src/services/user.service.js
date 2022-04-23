import axios from "axios";

// fake api
// const URL = "https://fakestoreapi.com/users";
// my local api
const URL = "http://localhost:5000";

const httpClient = axios.create({
  baseURL: URL,
});

export async function getUser(id) {
  return (await httpClient.get("/users/" + id)).data;
}
export async function updateUser(id, user) {
  return (await httpClient.post("/users/" + id, user)).data;
}

// waiting for my local api
export async function login({ uid, email }) {
  console.log(uid, email);
  return (await httpClient.post("/login", { uid, email })).data;
}
