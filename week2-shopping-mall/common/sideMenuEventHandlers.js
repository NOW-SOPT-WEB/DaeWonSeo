import { selectors } from "./selectors.js";

export const attachSideEventListeners = () => {
  // 사이드 메뉴 화살표 아이콘 클릭하면 모달 메뉴 닫히게
  selectors.arrowIcon.addEventListener("click", () => {
    selectors.aside.classList.remove("active");
  });

  // 장바구니 클릭 시 cart 페이지로 이동
  selectors.cartLink.addEventListener("click", () => {
    window.location.href = "./../../pages/cart/cart.html";
  });
};
