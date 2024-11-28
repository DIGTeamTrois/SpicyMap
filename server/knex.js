require("dotenv").config({ path: "./.env" });
const environment = process.env.RENDER
  ? "production"
  : process.env.NODE_ENV || "development";
const config = require("./knexfile.js")[environment];
const knex = require("knex")(config);
module.exports = knex;
