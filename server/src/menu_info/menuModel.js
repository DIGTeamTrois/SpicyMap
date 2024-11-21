require("dotenv").config({path: "../../.env"})

const environment = process.env.NODE_ENV;
const config = require("../../knexfile")[environment];
const db = require("knex")(config)

const MENU_TABLE = "menu_info"

module.exports = {
    MENU_TABLE,
    async all(limit){
        return await db(MENU_TABLE).limit(limit)
    },
    async find(id) {
        return await db(MENU_TABLE).where({id})
    },
    async save(data){
        await db.table(MENU_TABLE).insert(data)
        return this.find(data.id)
    }
}