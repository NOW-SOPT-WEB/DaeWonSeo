import { selectors } from "./selectors.js";
import { SHOPPING_LIST } from "../../../constants/items.js";

// 배너를 보여주는 함수
export const displayBanner = () => {
  Array.from({ length: 2 }).forEach(() => {
    SHOPPING_LIST.forEach((item) => {
      const li = document.createElement("li");
      li.innerHTML = `
        <img src="${item.image}" alt="${item.name}" />
      `;
      selectors.bannerWrapper.appendChild(li);
    });
  });
};

// 아이템 리스트 (쇼핑리스트) 를 보여주는 함수
export const displayItems = (filteredItems) => {
  selectors.itemWrapper.innerHTML = "";
  filteredItems.forEach((item) => {
    const article = document.createElement("article");
    article.innerHTML = `
        <img src="${item.image}" alt="${item.name}" />
        <i class="fas fa-heart"></i>
        <p>${item.price.toLocaleString()}원</p>
        <h3>${item.name}</h3>
      `;

    // article에 click 이벤트 리스너 추가하여 sessionStorage를 활용해 장바구니에 아이템 추가
    article.addEventListener("click", () => {
      const isConfirmed = window.confirm("장바구니에 추가하시겠습니까?");

      if (!isConfirmed) {
        window.alert("취소 되었습니다.");
        return;
      }

      const itemInfo = {
        id: item.id,
        name: item.name,
        image: item.image,
        category: item.category,
        price: item.price,
      };

      let cartList = sessionStorage.getItem("cartList");
      cartList = cartList ? JSON.parse(cartList) : [];

      if (cartList.some((cartItem) => cartItem.id === itemInfo.id)) {
        // 상품이 이미 장바구니에 있을 경우 추가하지 않음
        window.alert("이미 추가되어있는 상품입니다.");
        return;
      }

      cartList.push(itemInfo);
      sessionStorage.setItem("cartList", JSON.stringify(cartList));
      window.location.href = "./../../pages/cart/cart.html";
    });

    selectors.itemWrapper.appendChild(article);
  });
};

// 카테고리에 따라서 itemList를 필터링 하는 함수 (과일,일식,서적,전체)
export const filterItems = (category) => {
  if (category === "전체") {
    return SHOPPING_LIST;
  } else {
    const filteredItems = SHOPPING_LIST.filter(
      (item) => item.category === category
    );
    return filteredItems;
  }
};

// nav li태그의 요소를 누를 때 카테고리 값을 받아와서 필터링 된 결과를 보여줌
export const displayFilteredItems = (e) => {
  if (e.target.tagName.toLowerCase() === "li") {
    const category = e.target.innerText;
    selectors.itemTitle.innerText = category;
    const filteredItems = filterItems(category);
    displayItems(filteredItems);
  }
};
