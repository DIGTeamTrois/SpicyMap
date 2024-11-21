require("dotenv").config({ path: "../../.env" });

const environment = process.env.NODE_ENV;
const config = require("../../knexfile")[environment];
const db = require("knex")(config)

const COMMENT_TABLE="comment_info"

module.exports={
    COMMENT_TABLE,
    async all(limit) {
        return await db(COMMENT_TABLE).limit(limit)
    },
    async find(id) {
        return await db(COMMENT_TABLE).where({id})
    },
    async save(data){
        await db.table(COMMENT_TABLE).insert(data)
        return this.find(data.id)
    }


}
