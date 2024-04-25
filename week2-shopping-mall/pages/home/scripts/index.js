import { attachEventListeners } from "./eventHandlers.js";
import { attachCommonEventListener } from "../../../common/index.js";
import { displayItems } from "./utils.js";
import { displayBanner } from "./utils.js";
import { SHOPPING_LIST } from "../../../constants/items.js";

document.addEventListener("DOMContentLoaded", () => {
  displayBanner();
  displayItems(SHOPPING_LIST);
  attachEventListeners();
  attachCommonEventListener();
});
