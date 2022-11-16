//session 오류뜨는 loginRouter

const path = require("path");

const express = require("express");

const rootDir = require("../util/path");

const router = express.Router();

const userInfo = {
  email: "test123@naver.com",
  password: "test123123",
};

router.post("/login_check", (req, res) => {
  if (
    req.body.email == userInfo.email &&
    req.body.password == userInfo.password
  ) {
    req.session.user = req.body.email;
    //TypeError: Cannot set properties of undefined (setting 'user')
    res.redirect("/login/approve");
  } else {
    res.redirect("/login?msg=사용자 정보가 없습니다");
  }
});

router.get("/approve", (req, res) => {
  if (true) {
    res.render("loginSuccess", { user: req.session.user });
  } else {
    res.send("승인되지 않은 사용자 입니다.");
  }
});

router.get("/logout", (req, res) => {
  req.session.destroy(function (err) {
    if (err) {
      console.log(err);
      res.send("Error");
    } else {
      res.render("logInView", {
        pageTitle: "로그인",
        logout: "로그아웃 성공입니다~",
      });
    }
  });
});

router.get("/", (req, res, next) => {
  const msg = req.query.msg;
  res.render("logInView", {
    pageTitle: "로그인",
    path: "/logInRouter/logInRouterFile",
    msg: msg,
  });
});

module.exports = router;
