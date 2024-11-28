require("dotenv").config({ path: "./.env" });
// const environment = process.env.RENDER_ENV;
// const config = require("./knexfile.js")[environment];
// const knex = require("knex")(config);
// module.exports = knex;

const knex = require("knex");
const knexConfig = require("./knexfile.js");

module.exports = knex(knexConfig[process.env.NODE_ENV]);
