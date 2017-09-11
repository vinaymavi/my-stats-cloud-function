/**
 * This cloud function is to store and fetch my-stats extension data.
 */
'use strict';

const Datastore = require('@google-cloud/datastore');
const express = require('express');
const myApp = express.Router({mergeParams:true});
// Instantiates a client
const datastore = Datastore();
const KIND = "website";

exports.set = function set(req, res) {
    console.log(req.body);
    saveEntity(JSON.parse(req.body.value));
    res.status(200).send(JSON.stringify(req.body));
};

function saveEntity(data) {
    console.log("Auto generated key = "+datastore.int(10).toString());
    const entity = {
        key: createKey(data.startTime),
        data: data
    };

    datastore.save(entity)
        .then(()=> {
            console.log(entity + "Saved.")
        })
        .catch(()=> {
            console.error("Error to save entity.")
        });
}

function createKey(key) {
    return datastore.key([KIND, key])
}

myApp.get("/sub",function (req, resp) {
    resp.send("This is sub");
});
myApp.all("*",function (req, resp) {
    resp.send("This is ********");
});


exports.myroute = myApp;