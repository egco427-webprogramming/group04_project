const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const itemSchema = new Schema({
  name: { type: String },
  category: { type: String },
  price: { type: String },
  des: { type: String },
  promotion: { type: String },
  sold: { type: String },
  img_url: { type: String }
});

const userSchema = new Schema({
  uid: { type: String },
  firstname: { type: String },
  lastname: { type: String },
  tel: { type: String },
  adr: { type: String },
  email: { type: String }
});

const cartSchema = new Schema({
  uid: { type: String },
  items: [{item : String,unit : String}]
});

const historySchema = new Schema({
  uid: { type: String },
  date: { type: Date },
  items: [{item : String, promotion:String, unit : String}],
  price: { type: String }
});

module.exports = mongoose.model('items', itemSchema);
module.exports = mongoose.model('users', userSchema);
module.exports = mongoose.model('carts', cartSchema);
module.exports = mongoose.model('histories', historySchema);
