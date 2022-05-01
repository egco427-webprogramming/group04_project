var mongoose = require('mongoose')
carts = require('../model/object.model')
carts = mongoose.model('carts')


exports.getAllCarts = function (req, res) {
    try {
        var query = {
            sort: {
                uid: 1
            }
        }
        carts.find({}, null, query, function (err, cart) {
            if (err) throw err
            console.log("getAllCarts")
            res.json(cart)
        })
    } catch (err) {
        console.log(err)
    }
}

exports.getOneCart = function (req, res) {
    try {
        carts.findOne({
            uid: req.params.uid
        }, function (err, cart) {
            if (err) throw err
            console.log("getOneCart")
            if (cart != null) {
                res.json(cart)
            } else {
                var data = {
                    "uid": req.params.uid,
                    "items": []
                }
                var newCart = new carts(data)
                newCart.save(function (err, newcart) {
                    if (err) throw err
                    res.json(newcart)
                })
            }
        })
    } catch (err) {
        console.log(err)
    }

}

exports.updateCart = function (req, res) {
  try {
    console.log("updateCart");
    var newCart = {};
    newCart = req.body;
    console.log(req.params.uid, newCart);
    carts.findOneAndUpdate(
      { uid: req.params.uid },
      newCart,
      {
        new: true,
      },
      function (err, cart) {
        if (err) throw err;
        console.log(cart);
        res.json(cart);
      }
    );
  } catch (err) {
    console.log(err);
  }
};
