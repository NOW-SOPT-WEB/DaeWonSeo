import { attachEventListeners } from "./eventHandlers.js";
import { attachCommonEventListener } from "../../../common/index.js";
import { displayItems } from "./utils.js";
import { SHOPPING_LIST } from "../../../constants/items.js";

document.addEventListener("DOMContentLoaded", (event) => {
  displayItems(SHOPPING_LIST);
  attachEventListeners();
  attachCommonEventListener();
});
