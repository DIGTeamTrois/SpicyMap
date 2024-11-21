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
  app.get('/shops/:id', shopController.view);
  app.post('/shops', shopController.save);

  app.get('/menus', menuController.all);
  app.get('/menus/:id', menuController.view);
  app.post('/menus', menuController.save);

  app.get('/comments', commentController.all);
  app.get('/comments/:id', commentController.view);
  app.post('/comments', commentController.save);

  app.get('/categories', categoryController.all);
  app.get('/categories/:id', categoryController.view);
  app.post('/categories', categoryController.save);

  return app;
}

module.exports = {
  setupServer,
};
