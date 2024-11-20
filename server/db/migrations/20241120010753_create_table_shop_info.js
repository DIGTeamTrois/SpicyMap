/**
 * @param { import("knex").Knex } knex
 * @returns { Promise<void> }
 */
exports.up = function (knex) {
  return knex.schema.createTable("shop_info", function (table) {
    table.increments("id").primary();
    table.string("shop", 64).notNullable();
    table.decimal("average_spicy", 32, 2).notNullable();
    table.integer("category_id");
    table.decimal("latitude", 7, 4).notNullable();
    table.decimal("longitude", 7, 4).notNullable();
    table
      .foreign("category_id")
      .references("category_info.id")
      .onDelete("CASCADE");
  });
};
/**
 * @param { import("knex").Knex } knex
 * @returns { Promise<void> }
 */
exports.down = function (knex) {
  return knex.schema.dropTable("shop_info");
};
