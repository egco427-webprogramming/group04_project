var mongoose = require('mongoose')
histories = require('../model/object.model')
histories = mongoose.model('histories')

exports.getAllHistory = function (req, res) {
    try {
        var query = {
            sort: {
                date: -1
            }
        }
        histories.find({}, null, query, function (err, his) {
            if (err) throw err
            console.log("getAllHistory")
            res.json(his)
        })
    } catch (err) {
        console.log(err)
    }
}

exports.getUserHistory = function (req, res) {
    try {
        var query = {
            sort: {
                date: -1
            }
        }
        histories.find({
            uid: req.params.uid
        }, null, query, function (err, his) {
            if (err) throw err
            console.log("getUserHistory")
            res.json(his)
        })
    } catch (err) {
        console.log(err)
    }
}

exports.createHistory = function (req, res) {
    try {
        var newHist = new histories(req.body)
        console.log(req.body)
        var invalid = false
        req.body.items.forEach(data => {
            if (data.unit <= 0) {
                invalid = true
            }
        });
        if (!invalid) {
            newHist.save(function (err, his) {
                if (err) throw err
                res.json(his)
            })
        } else{
            console.log("invalid input")
            res.json("invalid input")
        }
    } catch (err) {
        console.log(err)
    }

}