/**
 * This cloud function is to store and fetch my-stats extension data.
 */


//TODO use multiple files to organized code.

'use strict';

const Datastore = require('@google-cloud/datastore');

// Instantiates a client
const datastore = Datastore();

exports.set = function set(req, res) {
    console.log(req.body);
    res.status(200).send(JSON.stringify(req.body));
};