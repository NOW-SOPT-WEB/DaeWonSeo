import { selectors } from "./selectors.js";
import { updateCartList, showPurchaseModal, selectItems } from "./utils.js";

export const attachEventListeners = () => {
  // 장바구니 페이지 홈으로 버튼 클릭 시 home 페이지로 이동
  selectors.homeBtn.addEventListener("click", () => {
    window.location.href = "./../../pages/home/home.html";
  });

  //모달 닫기 버튼 누르면 모달 닫히게
  selectors.modalCloseBtn.addEventListener("click", () => {
    selectors.purchaseModal.close();
  });

  // thead 체크박스 체크하면 모든 체크박스가 체크되게
  selectors.selectAllCheckbox.addEventListener("change", selectItems);

  // 구매하기 버튼 클릭하면 모달창 띄움
  selectors.purchaseBtn.addEventListener("click", showPurchaseModal);

  // 모달에 있는 구매하기 버튼을 클릭하면 모든 요소 삭제되고 구매완료됐다는 alert를 띄움
  selectors.modalPurchaseBtn.addEventListener("click", () => {
    updateCartList();
    window.alert("구매가 완료되었습니다.");
  });
};
