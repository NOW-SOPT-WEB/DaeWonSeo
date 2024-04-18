import { selectors } from "./selectors.js";
import { displayItems, displayFilteredItems } from "./utils.js";

export const attachEventListeners = () => {
  // 메인 로고 클릭 시 home.html로 이동
  selectors.mainIcon.addEventListener("click", () => {
    window.location.href = "home.html";
  });

  // 햄버거 로고 클릭 시 모달 메뉴 보이게
  selectors.hamburgerIcon.addEventListener("click", () => {
    selectors.aside.classList.add("active");
  });

  // 사이드 메뉴 화살표 아이콘 클릭하면 모달 메뉴 닫히게
  selectors.arrowIcon.addEventListener("click", () => {
    selectors.aside.classList.remove("active");
  });

  // 장바구니 클릭 시 cart 페이지로 이동
  selectors.cartLink.addEventListener("click", () => {
    window.location.href = "../cart/cart.html";
  });

  // nav에서 a태그에 클릭 이벤트 추가하여서 필터링 기능
  selectors.navLinkWrapper.addEventListener("click", displayFilteredItems);
};
