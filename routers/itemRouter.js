const path = require("path");

const express = require("express");

const rootDir = require("../util/path");

const router = express.Router();

// 엑셀 읽기
const xlsx = require("xlsx"); //xlsx 모듈 추출
const excelFile = xlsx.readFile(__dirname + "/../public/shoes.xlsx"); //엑셀 파일 가져오기
const sheetName = excelFile.SheetNames[0]; //첫번째 시트 정보 추출
const firstSheet = excelFile.Sheets[sheetName]; //시트의 제목 추출
const jsonData = xlsx.utils.sheet_to_json(firstSheet, { defval: "" }); //엑셀 파일의 첫번째 시트를 읽어온다.
//console.log(jsonData);

router.get("/", (req, res, next) => {
  res.render("itemView", {
    pageTitle: "디테일",
    path: "/itemRouter/itemRouterFile",
    data: jsonData, //엑셀에서 가져온 데이터(jsonData)를 뷰로 보내기
  });
});

module.exports = router;
