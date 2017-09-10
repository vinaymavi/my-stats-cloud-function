/**
 * Base Entity class
 */
const DataStore = require("@google-cloud/datastore");
const dataStore = DataStore();
/**
 *
 * @param kind DataStore kind
 * @return {Key} DataStoreKey
 */
function createKey(kind) {
    const randomInt = dataStore.int(10).toString();
    return dataStore.key([kind, randomInt])
}
class Entity {
    constructor(kind) {
        this.key = createKey(kind);
        this.dataStore = dataStore;
    }
}

module.exports = Entity;
