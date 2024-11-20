require("dotenv").config({ path: "../../.env" });

const environment = process.env.NODE_ENV;
const config = require("../../knexfile")[environment];
const db = require("knex")(config)

const CATEGORY_TABLE="category_info"

module.exports={
    CATEGORY_TABLE,
    async all() {
        return await db(CATEGORY_TABLE)
    }
}
