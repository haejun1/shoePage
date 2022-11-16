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
    req.approve = req.body.email;
    res.redirect("/login/approve");
  } else {
    res.redirect("/login?msg=사용자 정보가 없습니다");
  }
});

router.get("/approve", (req, res) => {
  res.render("loginSuccess", {
    pageTitle: "로그인 성공",
    path: "/logInRouter/logInRouterFile",
    user: req.approve,
  });
});

router.get("/logout", (req, res) => {
  res.render("logInView", {
    pageTitle: "로그인",
    logout: "로그아웃 성공입니다~",
    path: "/logInRouter/logInRouterFile",
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
