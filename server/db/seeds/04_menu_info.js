/**
 * @param { import("knex").Knex } knex
 * @returns { Promise<void> }
 */
exports.seed = async function (knex) {
  // Deletes ALL existing entries
  await knex("menu_info").del();
  await knex("menu_info").insert([
    { id: 1, shop_id: 1, menu: "台湾ラーメン", spicy_judge: 5 },
    { id: 2, shop_id: 1, menu: "台湾混ぜそば", spicy_judge: 4 },
    { id: 3, shop_id: 1, menu: "塩台湾ラーメン", spicy_judge: 3 },
    { id: 4, shop_id: 2, menu: "チゲスープ", spicy_judge: 3 },
    { id: 5, shop_id: 2, menu: "チヂミ", spicy_judge: 1 },
  ]);
};
