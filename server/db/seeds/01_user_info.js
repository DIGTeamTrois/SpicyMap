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
  ]);
};
