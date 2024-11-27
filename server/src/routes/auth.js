const express = require('express');
const router = express.Router();
const passport = require('passport');

// router.get('/log-in', (req, res) => {
//     // res.render('login');
//     res.status(200).send('login');
// });

router.post('/login/password',
    (req, res) => {

    // なぜかこれで動かない
    // passport.authenticate('local', {
    //     successRedirect: '/',
    //     failureRedirect: '/login',
    //     successFlash: true,
    //     failureFlash: true,
    //     // failureFlash: 'ユーザーIDかパスワードが間違っています',
    //     // successFlash: 'ようこそ！'
    // });

    // frontendで  (req, res) いれたら進んだ。　frontendは
    // passport.authenticate('local', {
    //     successRedirect: '/',
    //     failureRedirect: '/login',
    //     successFlash: true,
    //     failureFlash: true,
    //     // failureFlash: 'ユーザーIDかパスワードが間違っています',
    //     // successFlash: 'ようこそ！'
    // })(req, res);

    // passport.authenticate('local', {
    //     successRedirect: '/',
    //     failureRedirect: '/login',
    //     successFlash: true,
    //     failureFlash: true,
    //     // failureFlash: 'ユーザーIDかパスワードが間違っています',
    //     // successFlash: 'ようこそ！'
    // }, function (req, res, next) {
    //     console.log("post /login/password > req : ", req);
    //     console.log("post /login/password > res : ", res);
    //     console.log("post /login/password > next : ", next);
    // });


        const {username, password} = req.body;
        if (!username || !password) {
            return res.status(400).json({
                message: "usernameとpasswordが必要です",
            });
        }

        // 最初に設定したLocalStrategy(ユーザー名とパスワードでの認証)を使ってログイン
        passport.authenticate("local", (err, user) => {
            if (!user)
                return res.status(401).json({ message: "ログイン失敗！" });

            // sessionにログイン情報を格納
            req.logIn(user, () => {
                return res.json({ message: `ログイン成功！ Hello, ${user.username}` });
            });
        })(req, res);
    }
);

module.exports = router;