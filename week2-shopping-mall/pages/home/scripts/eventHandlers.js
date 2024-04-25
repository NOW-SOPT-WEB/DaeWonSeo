import { selectors } from "./selectors.js";
import { displayFilteredItems } from "./utils.js";

export const attachEventListeners = () => {
  // nav에서 a태그에 클릭 이벤트 추가하여서 필터링 기능
  selectors.navLinkWrapper.addEventListener("click", displayFilteredItems);
};
