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
    itemName: "케즈스니커즈",
    itemPrice: "30,000원",
    itemTag1: "신발",
    itemTag2: "흰색",
  });
});

module.exports = router;
