import axios from "axios";

// deployed api
const URL = "https://lucienshop3198.herokuapp.com/";
// my local api
// const URL = "http://localhost:5000";

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
export async function login({ uid, email, displayName = "" }) {
  const name = displayName?.split(" ") || ["", ""];
  const firstname = name?.at(0) || "";
  const lastname = name?.at(-1) || "";
  return (await httpClient.post("/login", { uid, email, firstname, lastname }))
    .data;
}
