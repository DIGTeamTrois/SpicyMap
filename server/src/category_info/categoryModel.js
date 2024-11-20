require("dotenv").config({ path: "../../.env" });

const config = require('../../knexfile')
const environment = process.env.NODE_ENV;
const db =require("knex")(config)[environment]

const CATEGORY_TABLE="category_info"

module.exports={
    CATEGORY_TABLE,
    async all() {
        return await db(CATEGORY_TABLE)
    }
}
