let express = require('express');
let router = express.Router();
let mongoose = require('mongoose');

let Store = require('../models/Store');

//token kullanilmali
router.post('/', (req, res) => {
    Store.create({}, (err, store) => {
        if(err){
            return res.status(500).send({status: 500, message: err});
        }
        res.status(200).send({status: 200, data: store});
    });
});

//get all stores
//token kullanilmali
router.get('/', (req, res) => {
    Store.find({}, (err, stores) => {
        if (err) {
            return res.status(500).send({status: 500, message: err});
        }
        res.status(200).send({status: 200, data: stores});
    });
});


module.exports = router;