//Zenn参照ページ：https://zenn.dev/wkb/books/node-tutorial/viewer/todo_10

const passport = require("passport");
const LocalStrategy = require("passport-local");
const knex = require("../../knex");
const bcrypt = require("bcrypt");
const User = require("../user_info/userModel");
// const cookieSession = require("cookie-session");
// const secret = "asdfasdfSecret"

const TABLE_NAME = "user_info";


module.exports = function (app) {
    passport.serializeUser(function (user, done) {
        console.log("serializeUser");
        done(null, user.id);
    });

    passport.deserializeUser(async function (id, done) {
        console.log("deserializeUser");
        try {
            const user = await User.findById(id);
            done(null, user);
        } catch (error) {
            done(error, null);
        }
    });

    passport.use('local', new LocalStrategy(
        {
            usernameField: "username",
            passwordField: "password",
        },
        async function (username, password, done) {
            console.log("localstrategy username : ", username);
            console.log("localstrategy password : ", password);
            // const result =  knex(TABLE_NAME).where(
            //     {
            //         name: username,
            //     }).select("*");
            // console.log(result);
            //
            // return done(null, false, {message: "Invalid User"});
            //
            // const [user] = await findUser(username);
            //
            // return done(null, {...user});



            knex(TABLE_NAME)
                .where(
                    {
                        user_name: username,
                    }).select("*")
                .then(
                    async function (results) {
                        if (results.length === 0) {
                            console.log("login verify 1");

                            return done(null, false, {message: "Invalid User"});
                        } else if (await bcrypt.compare(password, results[0].password)) {
                        // } else if (results[0]) {

                            console.log("login verify 2");
                            return done(null, results[0]);
                        } else {
                            console.log("login verify 3");

                            return done(null, false, {message: "Incorrect username or password."});
                        }
                    })
                .catch(function (err) {
                    console.error(err);
                    return done(err, false, {message: err.toString()});
                })

        })
    );

    // app.use(
    //     cookieSession({
    //         name: "session",
    //         keys: [secret],
    //
    //         // Cookie Options
    //         maxAge: 24 * 60 * 60 * 1000, // 24 hours
    //     })
    // );
    app.use(passport.initialize());

    app.use(passport.session());
}