/**
 * @param { import("knex").Knex } knex
 * @returns { Promise<void> }
 */
exports.seed = async function (knex) {
  // Deletes ALL existing entries
  await knex("shop_info").del();
  await knex("shop_info").insert([
    {
      shop_name: "四川飯店 名古屋",
      average_spicy: 4.2,
      category_id: 4,
      latitude: 35.1708,
      longitude: 136.8847,
    },
    {
      shop_name: "辛麺屋 桝元 名古屋駅前店",
      average_spicy: 3.8,
      category_id: 2,
      latitude: 35.1712,
      longitude: 136.8803,
    },
    {
      shop_name: "蒙古タンメン中本 名古屋店",
      average_spicy: 4.5,
      category_id: 2,
      latitude: 35.1699,
      longitude: 136.8834,
    },
    {
      shop_name: "赤から 名駅西口店",
      average_spicy: 3.9,
      category_id: 1,
      latitude: 35.1697,
      longitude: 136.8795,
    },
    {
      shop_name: "味仙 JR名古屋駅店",
      average_spicy: 4.0,
      category_id: 1,
      latitude: 35.1705,
      longitude: 136.881,
    },
    {
      shop_name: "陳麻婆豆腐 大名古屋ビルヂング店",
      average_spicy: 4.3,
      category_id: 4,
      latitude: 35.1702,
      longitude: 136.8825,
    },
    {
      shop_name: "四川伝統火鍋 蜀漢 名古屋駅店",
      average_spicy: 4.1,
      category_id: 4,
      latitude: 35.171,
      longitude: 136.883,
    },
    {
      shop_name: "マジックスパイス 名古屋店",
      average_spicy: 4.4,
      category_id: 3,
      latitude: 35.168,
      longitude: 136.884,
    },
    {
      shop_name: "中国四川料理 錦水苑",
      average_spicy: 4.2,
      category_id: 4,
      latitude: 35.172,
      longitude: 136.885,
    },
    {
      shop_name: "隆麺",
      average_spicy: 3.7,
      category_id: 2,
      latitude: 35.1695,
      longitude: 136.882,
    },
    {
      shop_name: "十夢",
      average_spicy: 3.6,
      category_id: 5,
      latitude: 35.17,
      longitude: 136.8815,
    },
    {
      shop_name: "四川火鍋楼",
      average_spicy: 4.0,
      category_id: 4,
      latitude: 35.1715,
      longitude: 136.8825,
    },
    {
      shop_name: "ロカンタアイハン",
      average_spicy: 3.5,
      category_id: 6,
      latitude: 35.169,
      longitude: 136.8835,
    },
    {
      shop_name: "天幸",
      average_spicy: 3.9,
      category_id: 4,
      latitude: 35.1703,
      longitude: 136.8808,
    },
    {
      shop_name: "陣屋",
      average_spicy: 3.8,
      category_id: 2,
      latitude: 35.1718,
      longitude: 136.8812,
    },
    {
      shop_name: "台湾らーめん おか田大曽根店",
      average_spicy: 4.1,
      category_id: 2,
      latitude: 35.1725,
      longitude: 136.8805,
    },
    {
      shop_name: "熊本ラーメン もっこす",
      average_spicy: 3.7,
      category_id: 2,
      latitude: 35.1692,
      longitude: 136.8828,
    },
    {
      shop_name: "広島つけ麺 ばくだん屋 名古屋店",
      average_spicy: 4.3,
      category_id: 2,
      latitude: 35.1707,
      longitude: 136.8817,
    },
    {
      shop_name: "やどがり屋",
      average_spicy: 3.6,
      category_id: 4,
      latitude: 35.1713,
      longitude: 136.8809,
    },
    {
      shop_name: "紀州和歌山ラーメン まっち棒千種店",
      average_spicy: 3.8,
      category_id: 2,
      latitude: 35.1698,
      longitude: 136.8832,
    },
  ]);
};
