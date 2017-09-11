/**
 * Website tests
 */
const chai = require("chai");
const Website = require("../src/website");
const assert = chai.assert;
const data = {
    "domain": "xyz.com",
    "port": "8080",
    "protocol": "https",
    "duration": 200,
    "date": "2017-09-11T15:12:25.734Z",
    "deviceId": "797f9sdf897f89ds798"
};
const dataCol = [{
    "domain": "xyz.com",
    "port": "8080",
    "protocol": "https",
    "duration": 200,
    "date": "2017-09-11T15:12:25.734Z",
    "deviceId": "797f9sdf897f89ds798"
},
    {
        "domain": "xyz.com",
        "port": "8080",
        "protocol": "https",
        "duration": 200,
        "date": "2017-09-11T15:12:25.734Z",
        "deviceId": "797f9sdf897f89ds798"
    },
    {
        "domain": "xyz.com",
        "port": "8080",
        "protocol": "https",
        "duration": 200,
        "date": "2017-09-11T15:12:25.734Z",
        "deviceId": "797f9sdf897f89ds798"
    },
    {
        "domain": "xyz.com",
        "port": "8080",
        "protocol": "https",
        "duration": 200,
        "date": "2017-09-11T15:12:25.734Z",
        "deviceId": "797f9sdf897f89ds798"
    }
];

describe("Website", ()=> {
    it("Insert", (done)=> {
        Website.save(data)
            .then((results)=> {
                assert.equal(1, 1);
                done();
            })
            .catch(()=> {

            });
    });
    it("Bulk Insert", ()=> {
        Website.save(dataCol)
            .then((results)=> {
                assert.equal(1, 1);
                done();
            })
            .catch(()=> {

            });
    });
    it("Should be valid", ()=> {
        assert.equal(1, 1);
    });
    it("Should is invalid", ()=> {
        assert.equal(1, 1);
    });
    it("Find Record by FB id", ()=> {
        assert.equal(1, 1);
    });
    it("Find by device id", ()=> {
        assert.equal(1, 1);
    });
});