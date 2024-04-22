import { attachEventListeners } from "./eventHandlers.js";
import { attachCommonEventListener } from "../../../common/index.js";
import { displayTable } from "./utils.js";

let cartList = sessionStorage.getItem("cartList");
cartList = cartList ? JSON.parse(cartList) : [];

document.addEventListener("DOMContentLoaded", (event) => {
  displayTable(cartList);
  attachEventListeners();
  attachCommonEventListener();
});
