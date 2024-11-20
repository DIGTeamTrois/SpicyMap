/**
 * @param { import("knex").Knex } knex
 * @returns { Promise<void> }
 */
exports.up = function (knex) {
  return knex.schema.createTable("comment_info", function (table) {
    table.increments("id").primary();
    table.integer("shop_id").notNullable();
    table.integer("menu_id").notNullable();
    table.integer("user_id").notNullable();
    table.integer("spicy_judge").notNullable();
    table.timestamp("post_datetime").notNullable();
    table.string("post_contents").notNullable();
    table.foreign("shop_id").references("shop_info.id").onDelete("CASCADE");
    table.foreign("menu_id").references("menu_info.id").onDelete("CASCADE");
    table.foreign("user_id").references("user_info.id").onDelete("CASCADE");
  });
};

/**
 * @param { import("knex").Knex } knex
 * @returns { Promise<void> }
 */
exports.down = function (knex) {
  return knex.schema.dropTable("comment_info");
};
