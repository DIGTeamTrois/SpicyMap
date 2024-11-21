const express = require("express");
const cors = require("cors");
const shopController= require("./shop_info/shopController");
const menuController = require("./menu_info/menuController");
const commentController = require("./comment_info/commentController");
const categoryController= require("./category_info/categoryController");

function setupServer() {
  const app = express();
  app.use(cors());

  app.use(express.json());
  app.use("/", express.static("../frontend/dist/"));
  app.get('/shops', shopController.all);
  app.get('/menus', menuController.all);
  app.get('/comments', commentController.all);
  app.get('/categorys', categoryController.all);
  return app;
}

module.exports = {
  setupServer,
};
