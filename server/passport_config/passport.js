//Zenn参照ページ：https://zenn.dev/wkb/books/node-tutorial/viewer/todo_10
// authorization
require("./config/passport")(app);
//！！！↑これをserver.jsに記載する

const passport = require("server/passport_config/passport");
const LocalStrategy = require("passport-local");
const knex = require("../db/knex");

module.exports = function (app) {
    passport.use(new LocalStrategy({
        //インプットタグのname属性でusername/passwordと設定した場所のデータが入る
            usernameField: "username",
            passwordField: "password",
        },function(username, password, done) {
        }
    ));
};