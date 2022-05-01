var mongoose = require('mongoose')
users = require('../model/object.model')
users = mongoose.model('users')


exports.getAllUsers = function (req, res) {
    try {
        var query = {
            sort: {
                firstname: 1
            }
        }
        users.find({}, null, query, function (err, user) {
            if (err) throw err
            console.log("getAllUsers")
            res.json(user)
        })
    } catch (err) {
        console.log(err)
    }

}

exports.getOneUser = function (req, res) {
    try {
        users.findOne({
            uid: req.params.uid
        }, function (err, user) {
            if (err) throw err
            console.log("getOneUser")
            if (user != null) {
                res.json(user)
            } else {
                var data = {
                    "uid": req.params.uid,
                    "firstname": "",
                    "lastname": "",
                    "tel": "",
                    "adr": "",
                    "email": ""
                }
                var newUser = new users(data)
                console.log(data)
                newUser.save(function (err, newuser) {
                    if (err) throw err
                    res.json(newuser)
                })
            }

        })
    } catch (err) {
        console.log(err)
    }

}

exports.createUser = function (req, res) {
    try {
        var newUser = new users(req.body)
        console.log(req.body)
        newUser.save(function (err, user) {
            if (err) throw err
            res.json(user)
        })
    } catch (err) {
        console.log(err)
    }

}

exports.updateUser = function (req, res) {
  try {
    console.log(req.params.id);
    var newUser = {};
    newUser = req.body;
    console.log(newUser);
    users.findOneAndUpdate(
      { uid: req.params.id },
      newUser,
      {
        new: true,
      },
      function (err, user) {
        if (err) throw err;
        console.log(user);
        res.json(user);
      }
    );
  } catch (err) {
    console.log(err);
  }
};

exports.login = function (req, res) {
  try {
    users.findOne(
      {
        uid: req.body.uid,
      },
      function (err, user) {
        if (err) throw err;
        console.log("login");
        if (user != null) {
          res.json(user);
        } else {
          var data = {
            uid: req.body.uid,
            firstname: req.body?.firstname || "",
            lastname: req.body?.lastname || "",
            tel: "",
            adr: "",
            email: req.body.email,
          };
          var newUser = new users(data);
          console.log(data);
          newUser.save(function (err, newuser) {
            if (err) throw err;
            res.json(newuser);
          });
        }
      }
    );
  } catch (err) {
    console.log(err);
  }
};
