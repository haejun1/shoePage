const path = require("path");

const express = require("express");

const rootDir = require("../util/path");

const router = express.Router();

router.get("/cartRouterFile", (req, res, next) => {
  //,"../" 보다 깔끔하게 하기위헤 rootDir을 가져옴, dirname으로도 가능
  res.render("cartView", {
    pageTitle: "장바구니",
    path: "/cartRouter/cartRouterFile",
    array: arr,
  });
});

//cart 생성...!

// async function getUser() {
//   // 로딩 시 사용자 가져오는 함수
//   try {
//     const res = await axios.get("/cart");
//     const cartItem = res.data;
//     const list = document.getElementById("list");
//     list.innerHTML = "";
//     //사용자마다 반복적으로 화면 표시 및 이벤트 연결
//     Object.keys(cartItem).map(function (key) {
//       const userDiv = document.createElement("div");
//       const span = document.createElement("span");
//       span.textContent = cartItem[key];

//       //장바구니에 포함된 제품 삭제
//       const remove = document.createElement("button");
//       remove.textContent = "삭제";
//       remove.addEventListener("click", async () => {
//         // 삭제 버튼 클릭
//         try {
//           await axios.delete("/cartView/" + key);
//           getUser();
//         } catch (err) {
//           console.error(err);
//         }
//       });

//       userDiv.appendChild(span);

//       userDiv.appendChild(remove);
//       list.appendChild(userDiv);
//       console.log(res.data);
//     });
//   } catch (err) {
//     console.error(err);
//   }
// }

module.exports = router;
