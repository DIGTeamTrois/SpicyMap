const express = require("express");
const cors = require("cors");
const shopController= require("./shop_info/shopController");
const menuController = require("./menu_info/menuController");
const commentController = require("./comment_info/commentController");
const categoryController= require("./category_info/categoryController");
const authRouter = require("./routes/auth");
const createError = require("http-errors");
const passport = require("passport");
const session = require('express-session');
const path = require('path');
const flash = require('connect-flash');

function setupServer() {
  const app = express();
  // app.use(cors());

  app.use(passport.initialize());
  app.use(session({
    secret: "secret",
    resave: false,
    saveUninitialized: true ,
  }));
  app.use(flash());
  app.use(passport.authenticate('session')); // officialのtutorialsであった
  app.use(express.json());

  // Reactのビルドディレクトリのパスを解決
  const frontendPath = path.resolve(__dirname, '../../frontend/dist');
  app.use("/", express.static("../frontend/dist/"));
  // app.use("/", express.static(frontendPath)); // なぜ結果が同じになるのかわからない
  app.use("/", authRouter);

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

  app.get('*', (req, res) => {
    res.sendFile(path.join(frontendPath, 'index.html'));
  });

  return app;
}

module.exports = {
  setupServer,
};
