require("dotenv").config({ path: "../../.env" });

const environment = process.env.NODE_ENV;
const config = require("../../knexfile")[environment];
const db = require("knex")(config)

const COMMENT_TABLE="comment_info"

module.exports={
    COMMENT_TABLE,
    async all() {
        return await db(COMMENT_TABLE)
    }
}
