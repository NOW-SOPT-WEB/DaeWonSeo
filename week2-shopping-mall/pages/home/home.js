import { SHOPPING_LIST } from "../../constants/item.js";

const mainIcon = document.querySelector("#main-logo");
const hamburgerIcon = document.querySelector("#hamburger-logo");
const aside = document.querySelector("aside");
const cartLink = document.querySelector("#cart-link");
const arrowIcon = document.querySelector("#arrow-icon");
const itemWrapper = document.querySelector(".items-wrapper");
const itemTitle = document.querySelector(".item-container h2");

// 메인 로고 클릭 시 home.html로 이동
mainIcon.onclick = () => {
  location.href = "home.html";
};

// 햄버거 로고 클릭시 모달 메뉴 보이게
hamburgerIcon.onclick = () => {
  aside.classList.add("active");
};

// 사이드 메뉴 화살표 아이콘 클릭하면 모달 메뉴 닫히게
arrowIcon.onclick = () => {
  aside.classList.remove("active");
};

// 장바구니 클릭 시 cart 페이지로 이동
cartLink.onclick = () => {
  location.href = "../cart/cart.html";
};

// 아이템 리스트 (쇼핑리스트) 를 보여주는 함수
const displayItems = (filteredItems) => {
  itemWrapper.innerHTML = "";
  filteredItems.forEach((item) => {
    const article = document.createElement("article");
    article.innerHTML = `
          <img src="${item.image}" alt="${item.name}" />
          <i class="fas fa-heart"></i>
          <p>${item.price.toLocaleString()}원</p>
          <h3>${item.name}</h3>
        `;

    // article에 onclick 이벤트로 장바구니에 추가할 수 있게 함 (sessionStorage 활용)
    article.onclick = () => {
      const isConfirmed = confirm("장바구니에 추가하시겠습니까?");

      if (!isConfirmed) {
        alert("취소 되었습니다.");
        return;
      }

      const itemInfo = {
        name: item.name,
        image: item.image,
        category: item.category,
        price: item.price,
      };

      let cartList = sessionStorage.getItem("cartList");
      cartList = cartList ? JSON.parse(cartList) : [];

      if (cartList.some((cartItem) => cartItem.name === itemInfo.name)) {
        // 중복해서 추가할수 없게함
        alert("이미 추가되어있는 상품입니다.");
        return;
      }

      cartList.push(itemInfo);
      sessionStorage.setItem("cartList", JSON.stringify(cartList));
      alert("상품이 정상적으로 추가되었습니다.");
    };

    itemWrapper.appendChild(article);
  });
};

// 카테고리에 따라서 itemList를 필터링 하는 함수 (과일,일식,서적,전체)
function filterItems(category) {
  if (category === "전체") {
    return SHOPPING_LIST;
  } else {
    const filteredItems = SHOPPING_LIST.filter(
      (item) => item.category === category
    );
    return filteredItems;
  }
}

// nav에서 a태그에 클릭 이벤트 추가
document.querySelector(".nav-link-wrapper").onclick = (e) => {
  if (e.target.tagName === "LI") {
    const category = e.target.innerText;
    itemTitle.innerText = category;
    const filteredItems = filterItems(category);
    displayItems(filteredItems);
    e.preventDefault();
  }
};

// 처음 화면에서는 전체 목록을 보여줌
displayItems(SHOPPING_LIST);
