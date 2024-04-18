import { selectors } from "./selectors.js";
import { updateCartList, showPurchaseModal, selectItems } from "./utils.js";

export const attachEventListeners = () => {
  // 메인 로고 클릭 시 home.html로 이동
  selectors.mainIcon.addEventListener("click", () => {
    window.location.href = "./../../pages/home/home.html";
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
    window.location.href = "./../../pages/cart/cart.html";
  });

  // 장바구니 페이지 홈으로 버튼 클릭 시 home 페이지로 이동
  selectors.homeBtn.addEventListener("click", () => {
    window.location.href = "./../../pages/home/home.html";
  });

  //모달 닫기 버튼 누르면 모달 닫히게
  selectors.modalCloseBtn.addEventListener("click", () => {
    selectors.purchaseModal.close();
  });

  selectors.selectAllCheckbox.addEventListener("change", selectItems);

  selectors.purchaseBtn.addEventListener("click", () => {
    showPurchaseModal();
  });

  selectors.modalPurchaseBtn.addEventListener("click", () => {
    updateCartList();
    alert("구매가 완료되었습니다.");
  });
};
