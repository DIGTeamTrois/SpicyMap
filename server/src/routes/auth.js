const express = require('express');
const router = express.Router();
const passport = require('passport');

// router.get('/log-in', (req, res) => {
//     // res.render('login');
//     res.status(200).send('login');
// });

router.post('/api/login',
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
                return res.json({ message: `ログイン成功！ Hello, ${user.user_name}` });
            });
        })(req, res);
    }
);

// サインアップ
// router.post("/sign-up", userController.save);

// router.post("/api/signup", (req, res, next) => {
//     //todo
// });


// ログアウトエンドポイント
router.get("/logout", (req, res, next) => {
    req.logout((err) => {
        // res.json({ message: "ログアウト成功" });
        if (err) { return next(err); }
        console.log("logout");
        res.redirect('/');
    });
});

router.get('/api/user', (req, res) => {
    if (req.isAuthenticated()) {
        res.json({ user: req.user }); // ログイン中のユーザー情報を返す
    } else {
        res.status(401).json({ message: 'Unauthorized' }); // 未認証の場合
    }
});

module.exports = router;