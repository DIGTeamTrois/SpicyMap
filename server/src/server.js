const express = require("express");
const cors = require("cors");
const {getAllShops} = require("./shop_info/shopController");
const {getAllMenus} = require("./menu_info/menuController");
const {getAllComments} = require("./comment_info/commentController");
const {getAllCategorys} = require("./category_info/categoryController");

function setupServer() {
  const app = express();
  app.use(cors());

  app.use(express.json());
  app.use("/", express.static("../frontend/dist/"));
  app.get('/shops', getAllShops);
  app.get('/menus', getAllMenus);
  app.get('/shops', getAllComments);
  app.get('/categorys', getAllCategorys);
  return app;
}

module.exports = {
  setupServer,
};
