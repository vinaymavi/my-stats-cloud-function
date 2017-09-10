/**
 * Website Entity.
 */
const Entity = require("./Entity");
const KIND = "Website";
class Website extends Entity {
    constructor(data) {
        super(KIND);
        this.data = data;
    }


    validate() {
        //TODO implementation pending.
    }

    save() {
        const entity = {
            key: this.key,
            data: this.data
        };
        return this.dataStore.save(entity);
    }

    list() {
        const query = this.dataStore.createQuery(KIND);
        return this.dataStore.runQuery(query);
    }
}
module.exports = Website;