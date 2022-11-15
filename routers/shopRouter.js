const path = require("path");

const express = require("express");

const rootDir = require("../util/path");

const router = express.Router();

const fs = require("fs");

router.get("/", (req, res, next) => {
  res.render("shopView", {
    //view폴더내 파일명 적는거 맞다
    pageTitle: "홈",
    path: "/",
  });
});

module.exports = router;
