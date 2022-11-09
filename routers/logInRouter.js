const path = require("path");

const express = require("express");

const rootDir = require("../util/path");

const router = express.Router();

router.get("/", (req, res, next) => {
  res.render("logInView", {
    pageTitle: "로그인",
    path: "/logInRouter/logInRouterFile",
  });
});

module.exports = router;
