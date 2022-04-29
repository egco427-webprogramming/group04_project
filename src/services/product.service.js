import axios from "axios";

// fake api
// const URL = "https://fakestoreapi.com/products";
// work in local
const URL = "http://localhost:5000/items";

const httpClient = axios.create({
  baseURL: URL,
});

export async function getProductList() {
  return (await httpClient.get("/")).data;
}
export async function getProductListWithKeyword(keyword = "") {
  return (await httpClient.get(`/keyword/${keyword}`)).data;
}
export async function getProductListWithCategory(category = "") {
  return (await httpClient.get(`/category/${category}`)).data;
}
export async function getProductListWithPromotion() {
  return (await httpClient.get(`/promotion`)).data;
}

export async function getProduct(id = "6262ddd37fb62705ecb84720") {
  return (await httpClient.get("/id/" + id)).data;
}

export async function getCategoryList() {
  // return (await httpClient.get("/categories")).data;
  return ["JEANS", "T-Shirts", "Jacket", "Coat", "Sunglasses"];
}
