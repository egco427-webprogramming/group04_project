// connect to mongodb atlas
require("./config/database").connect();

const express = require("express");

// import controller
const userController = require("./controller/user.controller");
const itemController = require("./controller/item.controller");
const cartController = require("./controller/cart.controller");
const histController = require("./controller/history.controller");

const app = express();

// https://www.geeksforgeeks.org/express-js-express-json-function/
app.use(express.json());

const cors = require("cors");
app.use(cors());

const bodyParser = require("body-parser");
app.use(bodyParser.json());
app.use(
  bodyParser.urlencoded({
    extended: false,
  })
);

//////////////////////////////////////////////////////////
// create user
app.post("/users/create", userController.createUser);

// update user
app.post("/users/:id", userController.updateUser);

// get all user
app.get("/users", userController.getAllUsers);

// get one user
app.get("/users/:uid", userController.getOneUser);

// login
app.post("/login", userController.login);
//////////////////////////////////////////////////////////

//////////////////////////////////////////////////////////
// get all items
app.get("/items", itemController.getAllItems);

// get one item
app.get("/items/id/:id", itemController.getOneItem);

// get all item in cart
app.get("/items/get/allitemincart", itemController.getAllItemInCart);

// search item
app.get("/items/category/:category", itemController.searchItems);

// search item2
app.get("/items/keyword/:keyword", itemController.searchItemsbyKeyword);

// promotion item
app.get("/items/promotion", itemController.promotionItems);
//////////////////////////////////////////////////////////

//////////////////////////////////////////////////////////
// get all carts
app.get("/carts", cartController.getAllCarts);

// get one carts
app.get("/carts/:uid", cartController.getOneCart);

// update carts
app.post("/carts/:uid", cartController.updateCart);
//////////////////////////////////////////////////////////

//////////////////////////////////////////////////////////
// get all history
app.get("/history", histController.getAllHistory);

// get user history
app.get("/history/id/:uid", histController.getUserHistory);

// create history
app.post("/history/purchased", histController.createHistory);
//////////////////////////////////////////////////////////

module.exports = app;
