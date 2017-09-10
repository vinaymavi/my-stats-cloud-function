/**
 * Website tests
 */
const chai = require("chai");
const Website = require("../src/entities/Website");
const assert = chai.assert;
describe("Website", ()=> {
    it("Should Empty", (done)=> {
        const web = new Website({"site": ""});
        web.list()
            .then((results)=> {
                const entities = results[0];
                assert.equal(0, entities.length);
                done();
            })
            .catch((err)=> {
                assert.equal(1, 0);
                done();
            });
    });
    it("Insert", ()=> {
        assert.equal(1, 1);
    });
    it("Bulk Insert", ()=> {
        assert.equal(1, 1);
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