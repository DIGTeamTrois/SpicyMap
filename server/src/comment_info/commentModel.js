require("dotenv").config({ path: "../../.env" });

const config = require('../../knexfile')
const environment = process.env.NODE_ENV;
const db =require("knex")(config)[environment]

const COMMENT_TABLE="comment_info"

module.exports={
    COMMENT_TABLE,
    async all() {
        return await db(COMMENT_TABLE)
    }
}
