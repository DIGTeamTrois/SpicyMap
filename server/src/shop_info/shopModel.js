require("dotenv").config({path: "../../.env"})

const environment = process.env.NODE_ENV;
const config = require("../../knexfile")[environment];
const db = require("knex")(config)

//
const SHOP_TABlE = "shop_info"

module.exports = {
    SHOP_TABlE,
    async all(limit){
        return await db(SHOP_TABlE).limit(limit)
        // const result= await db(SHOP_TABlE)
        // console.log("🍎🍎🍎🍎result", result  )
        // return result
    },
    async find(id) {
        return await db(SHOP_TABlE).where({id})
    },
    async save(data){
        await db.table(SHOP_TABlE).insert(data)
        return this.find(data.id)
    }
}