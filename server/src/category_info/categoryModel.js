require("dotenv").config({ path: "../../.env" });

const environment = process.env.NODE_ENV;
const config = require("../../knexfile")[environment];
const db = require("knex")(config)

const CATEGORY_TABLE="category_info"

module.exports={
    CATEGORY_TABLE,
    async all(limit) {
        return await db(CATEGORY_TABLE).limit(limit)
    },
    async find(id) {
        return await db(CATEGORY_TABLE).where({id})
    },
    async save(data){
        await db.table(CATEGORY_TABLE).insert(data)
        return this.find(data.id)
    }
}
