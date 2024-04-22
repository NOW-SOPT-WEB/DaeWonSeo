import { selectors } from "./selectors.js";

export const attachHeaderEventListeners = () => {
  // 메인 로고 클릭 시 home.html로 이동
  selectors.mainIcon.addEventListener("click", () => {
    window.location.href = "./../../pages/home/home.html";
  });

  // 햄버거 로고 클릭 시 모달 메뉴 보이게
  selectors.hamburgerIcon.addEventListener("click", () => {
    selectors.aside.classList.add("active");
  });
};
