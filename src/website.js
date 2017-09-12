/**
 * Website service.
 */
/*TODO we do not need class based implementation as application is simple enough.*/
const DataStore = require("@google-cloud/datastore");
const util = require('util');
const dataStore = DataStore();
const KEY_LENGTH = 10000000000000000000;
const KIND = "Website";
/*TODO validate data*/
class Website {
    static save(data) {
        const entityCollection = createEntityCollection(data);
        //console.log(util.inspect(entityCollection));
        return dataStore.save(entityCollection);
    }
}
/**
 * Create an entity collection.
 * @param data
 * @returns {Array}
 *
 */
function createEntityCollection(data) {
    let entityCollection = [];
    if (data instanceof Array) {
        data.forEach((el, index)=> {
            entityCollection.push(createEntity(el));
        });
    } else {
        entityCollection.push(createEntity(data));
    }
    return entityCollection;
}

function createEntity(data) {
    let entity = null;
    data.date = new Date(data.date);
    entity = {};
    entity.key = createKey();
    entity.data = data;
    return entity;
}

function createKey() {
    const intId = dataStore.int(Math.random() * KEY_LENGTH);
    const key = dataStore.key([KIND, intId]);
    return key;
}

module.exports = Website;