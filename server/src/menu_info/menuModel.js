require("dotenv").config({path: "../../.env"})

const config = require("../../knexfile")
const environment = process.env.NODE_ENV;
const db = require("knex")(config)[environment]

const MENU_TABLE = "menu_info"

module.exports = {
    MENU_TABLE,
    async all(){
        return await db(MENU_TABLE)
    }
}