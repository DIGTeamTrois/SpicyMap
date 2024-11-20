require("dotenv").config({path: "../../.env"})

const environment = process.env.NODE_ENV;
const config = require("../../knexfile")[environment];
const db = require("knex")(config)

const MENU_TABLE = "menu_info"

module.exports = {
    MENU_TABLE,
    async all(){
        return await db(MENU_TABLE)
    }
}