require("dotenv").config({ path: "../../.env" });

const environment = process.env.NODE_ENV;
const config = require("../../knexfile")[environment];
const db = require("knex")(config);

const MENU_TABLE = "menu_info";
const SHOP_TABlE = "shop_info";

const updateShopSpicyAverage = async (shop_id) => {
  let spicyAvg = await spicyAvgCal(shop_id);
  await db(SHOP_TABlE).update("average_spicy", spicyAvg).where("id", shop_id);
};

const spicyAvgCal = async (shop_id) => {
  const spicyOfShopArr = await db(MENU_TABLE).where({ shop_id });
  const shopSpicyAvg =
    spicyOfShopArr.reduce((sum, item) => sum + item.spicy_judge, 0) /
    spicyOfShopArr.length;
  return shopSpicyAvg;
};

module.exports = {
  MENU_TABLE,
  async all(limit) {
    return await db(MENU_TABLE).limit(limit);
  },
  async find(id) {
    return await db(MENU_TABLE).where({ id });
  },
  async save(data) {
    const [{ id }] = await db.table(MENU_TABLE).insert(data).returning("id");
    await updateShopSpicyAverage(data.shop_id);
    return this.find(id);
  },
};
