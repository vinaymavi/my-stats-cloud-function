/**
 * This cloud function is to store and fetch my-stats extension data.
 */
'use strict';

const express = require('express');
const websiteApp = express.Router({mergeParams: true});
const util = require("util");
const Website = require("./src/website");

websiteApp.post("/save", function (req, resp) {
    console.log(util.inspect(req.body.value));
    const data = JSON.parse(req.body.value);
    Website.save(data)
        .then((result)=> {
            console.log(util.inspect(result));
            resp.status(200).send({"message": "Data saved successfully"});
        })
        .catch((err)=> {
            console.error(util.inspect(err));
            resp.status(500).send({"message": "Error in data saving"});
        });


});

websiteApp.get("/save", function (req, resp) {
    resp.send("Not supported request type");
});


websiteApp.all("*", function (req, resp) {
    resp.send("This is not a valid request");
});


exports.website = websiteApp;