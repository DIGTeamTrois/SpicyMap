/**
 * @param { import("knex").Knex } knex
 * @returns { Promise<void> }
 */
exports.seed = async function (knex) {
  // Deletes ALL existing entries
  await knex("user_info").del();
  await knex("user_info").insert([
    { id: 1, user_name: "kuni", login_name: "kuni", password: "1234567890" },
    { id: 2, user_name: "suke", login_name: "suke", password: "1234567890" },
    { id: 3, user_name: "natsu", login_name: "natsu", password: "1234567890" },
    {
      id: 4,
      user_name: "muusan",
      login_name: "muusan",
      password: "1234567890",
    },
    { id: 5, user_name: "a", login_name: "a", password: "$2b$10$vS1UKytZSEiO5ef.WWLXUO4u0y33ThNRtGhxXBNKUGdZMNuySm8KS" },
    { id: 6, user_name: "tora", login_name: "tora", password: "$2b$10$m5phAy6nighOA6OZZgE8a.U9tGNh2STH6FmmKrf.hyFAYnLhrpAs6" },
    { id: 7, user_name: "tsugu", login_name: "tsugu", password: "$2b$10$XYA4.HSwSCAga0YtewKkKeTgvT2v9vCiaWJUv5X5T7j6FtYGtNqyK" },
    { id: 8, user_name: "masayoshi", login_name: "masayoshi", password: "$2b$10$4MM.JTT7Bw.YGJQAJVzbZOMbR45HA6ybKhGSdx1r.9nP9vCQKwLaO" },
  ]);
};
