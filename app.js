const path = require("path");
const express = require("express");
const bodyParser = require("body-parser");
const session = require("express-session");

const app = express();

app.set("view engine", "ejs");
app.set("views", "views");

const shopRoutes = require("./routers/shopRouter");
const cartRoutes = require("./routers/cartRouter");
const itemRoutes = require("./routers/itemRouter");
const logInRoutes = require("./routers/logInRouter");
const { fstat } = require("fs");

app.use(bodyParser.urlencoded({ extended: false }));
app.use("/public", express.static(path.join(__dirname, "public")));
//메인 디렉토리는 public file 내 정적파일들을 찾음

app.use("/", shopRoutes);
app.use("/cart", cartRoutes);
app.use("/item", itemRoutes);
app.use("/login", logInRoutes); //app.get으로...?

//shopView의 장바구니 추가 버튼 클릭 시, 각 제품 정보 전송(cartRouter에서 cartView로)
app.post("/itemRouter/itemRouterFile/add", (req, res) => {
  //경로 수정
  var productId = req.body.productId;
  console.log(productId);

  let arr = [];
  arr.push(productId); //계속 추가하는 법...??
  console.log(arr);

  //res.send(`선택한 제품 ID : ${productId}`);
  res.send(`전체 제품 ID : ${arr}`);
});

//logIn

app.use(
  session({
    //session 적용
    secret: "@showpagesecret",
    //암호화 시 사용키
    resave: false, //세션을 접속할 때 마다 새로운 세션을 발급할지 말지를 결정
    saveUninitialized: true, //세션 ID를 발급하지 않는 세션도 기록할지 결정
  })
);

// app.post("/login_check", (req, res) => {
//   var id = req.body.id;
//   var pw = req.body.pw;
//   res.send(`id : ${id}, pw : ${pw}`);
// });

app.get("/detail", (req, res) => {
  var index = req.query.data[i].index;

  res.send(`index : ${index}`);
});

//error page
app.use((req, res, next) => {
  res.status(404).render("404", { pageTitle: "Page Not Found", path: "/404" });
});

app.listen(3002);
