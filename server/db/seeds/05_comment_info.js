/**
 * @param { import("knex").Knex } knex
 * @returns { Promise<void> }
 */
exports.seed = async function (knex) {
  // Deletes ALL existing entries
  await knex("comment_info").del();
  await knex("comment_info").insert([
    {
      id: 1,
      shop_id: 1,
      menu_id: 1,
      user_id: 1,
      spicy_judge: 5,
      post_datetime: new Date(),
      post_contents: "辛い",
    },
    {
      id: 2,
      shop_id: 2,
      menu_id: 1,
      user_id: 1,
      spicy_judge: 3,
      post_datetime: new Date(),
      post_contents: "普通",
    },
    {
      id: 3,
      shop_id: 2,
      menu_id: 2,
      user_id: 2,
      spicy_judge: 2,
      post_datetime: new Date(),
      post_contents: "あまり辛くない",
    },
    {
      id: 4,
      shop_id: 1,
      menu_id: 1,
      user_id: 3,
      spicy_judge: 4,
      post_datetime: new Date(),
      post_contents: "少し辛い",
    },
    {
      id: 5,
      shop_id: 1,
      menu_id: 1,
      user_id: 4,
      spicy_judge: 5,
      post_datetime: new Date(),
      post_contents: "辛い",
    },
  ]);
};
