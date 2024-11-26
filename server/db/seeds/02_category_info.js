/**
 * @param { import("knex").Knex } knex
 * @returns { Promise<void> }
 */
exports.seed = async function (knex) {
  // Deletes ALL existing entries
  await knex("category_info").del();
  await knex("category_info").insert([
    { id: 1, category: "韓国料理" },
    { id: 2, category: "ラーメン" },
    { id: 3, category: "カレー" },
    { id: 4, category: "中華料理" },
    { id: 5, category: "インド料理" },
    { id: 6, category: "その他" },
  ]);
};
