require("dotenv").config({path: "../../.env"})

const environment = process.env.NODE_ENV;
const config = require("../../knexfile")[environment];
const db = require("knex")(config)

//
const SHOP_TABlE = "shop_info"

module.exports = {
    SHOP_TABlE,
    async all(){
        return await db(SHOP_TABlE)
        // const result= await db(SHOP_TABlE)
        // console.log("🍎🍎🍎🍎result", result  )
    }
}