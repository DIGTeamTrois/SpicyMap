/**
 * @param { import("knex").Knex } knex
 * @returns { Promise<void> }
 */
exports.up = function (knex) {
  return knex.schema.createTable("menu_info", function (table) {
    table.increments("id").primary();
    table.integer("shop_id").notNullable();
    table.string("menu", 64).notNullable();
    table.integer("spicy_judge").notNullable();
    table.foreign("shop_id").references("shop_info.id").onDelete("CASCADE");
  });
};

/**
 * @param { import("knex").Knex } knex
 * @returns { Promise<void> }
 */
exports.down = function (knex) {
  return knex.schema.dropTable("menu_info");
};
