import axios from "axios";

// work in local
const URL = "https://fakestoreapi.com/products";

const httpClient = axios.create({
  baseURL: URL,
});

export async function getProductList() {
  return (await httpClient.get("/", { params: { limit: 5 } })).data;
}
// export async function getProduct(id = "1") {
//   return (await httpClient.get("/" + id)).data;
// }
export async function getCategoryList() {
  return (await httpClient.get("/category")).data;
}

// export async function addContact(contact = {}) {
//   return (await httpClient.post("/contacts", contact)).data;
// }
// export async function editContact(contact = {}) {
//   return (await httpClient.post("/contacts/" + contact.cid || "", contact))
//     .data;
// }

// export async function getContact(id = "") {
//   return (await httpClient.get("/contacts/" + id)).data;
// }

// export async function deleteContact(id = "") {
//   console.log("delete");
//   return (await httpClient.delete("/contacts/" + id)).data;
// }
