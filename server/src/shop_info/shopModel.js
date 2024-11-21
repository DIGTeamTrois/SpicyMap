require("dotenv").config({path: "../../.env"})

const environment = process.env.NODE_ENV;
const config = require("../../knexfile")[environment];
const db = require("knex")(config)

//
const SHOP_TABlE = "shop_info"

module.exports = {
    SHOP_TABlE,
    async all(limit){
        const shopData = await db(SHOP_TABlE).limit(limit)
        const changedShopData = shopData.map(data => {
            data.average_spicy = Number(data.average_spicy);
            data.latitude = Number(data.latitude);
            data.longitude = Number(data.longitude)
            return data
        })
        return changedShopData;
        // return await db(SHOP_TABlE).limit(limit)
        // const result= await db(SHOP_TABlE)
        // console.log("🍎🍎🍎🍎result", result  )
        // return result
    },
    async find(id) {
        const foundData = await db(SHOP_TABlE).where({id})
        const changedFoundData = foundData.map(data => {
            data.average_spicy = Number(data.average_spicy);
            data.latitude = Number(data.latitude);
            data.longitude = Number(data.longitude)
            return data
        })
        return changedFoundData
    },
    async save(data){
        await db.table(SHOP_TABlE).insert(data)
        return this.find(data.id)
    }
}