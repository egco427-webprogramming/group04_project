import axios from "axios";

// deployed api
const URL = "https://lucienshop3198.herokuapp.com/items";
// work in local
// const URL = "http://localhost:5000/items";

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
// fixed category
export async function getCategoryList() {
  return ["JEANS", "T-Shirts", "Jacket", "Coat", "Sunglasses"];
}
