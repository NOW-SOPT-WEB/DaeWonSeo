import { SHOPPING_LIST } from "../../constants/item.js";

const mainIcon = document.querySelector("#main-logo");
const itemWrapper = document.querySelector(".items-wrapper");
const itemTitle = document.querySelector(".item-container h2");

// 메인 로고 클릭 시 home.html로 이동
mainIcon.onclick = () => {
  window.location.href = "home.html";
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
