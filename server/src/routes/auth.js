const express = require('express');
const passport = require('passport');
const LocalStrategy = require('passport-local');
// const crypto = require('crypto');
const bcrypt = require('bcrypt');
const router = express.Router();
const knex = require('../../knex');

const TABLE_NAME = "user_info";

async function findById(userId) {
    const user = await where({id: userId});
    if (user === null) {
        throw new Error("User not found")
    }
    return {...user};
}

async function where(condition) {
    return await knex(TABLE_NAME)
        .where(condition)
        .then((results) => {
            if (results.length === 0) {
                return null;
            }
            return results[0];
        });
}

passport.serializeUser(function (user, done) {
    done(null, user.id);
});

passport.deserializeUser(async function (id, done) {
    try {
        const user = await User.findById(id);
        done(null, user);
    } catch (error) {
        done(error, null);
    }
});

passport.use(new LocalStrategy(
    {
        usernameField: "username",
        passwordField: "password",
    },
    function (username, password, done) {
        knex(TABLE_NAME)
            .where(
                {
                    name: username,
                }).select("*")
            .then(
                async function (results) {
                    if (results.length === 0) {
                        return done(null, false, {message: "Invalid User"});
                    } else if (await bcrypt.compare(password, results[0].password)) {
                        return done(null, results[0]);
                    } else {
                        return done(null, false, {message: "Incorrect username or password."});
                    }
                })
            .catch(function (err) {
                console.error(err);
                return done(null, false, {message: err.toString()});
            })
    })
);


// router.get('/log-in', (req, res) => {
//     // res.render('login');
//     res.status(200).send('login');
// });
router.post('/login/password', passport.authenticate('local', {

// router.post('/login/password', passport.authenticate('local', {
    successRedirect: '/',
    failureRedirect: '/login',
    failureFlash: 'ユーザーIDかパスワードが間違っています',
    successFlash: 'ようこそ！'
}));

module.exports = router;