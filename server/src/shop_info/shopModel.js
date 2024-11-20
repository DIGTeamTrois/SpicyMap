require("dotenv").config({path: "../../.env"})

const config = require("../../knexfile")
const environment = process.env.NODE_ENV;
const db = require("knex")(config)[environment]

const SHOP_TABlE = "shop_info"

module.exports = {
    SHOP_TABlE,
    async all(){
        return await db(SHOP_TABlE)
    }
}