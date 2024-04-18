import { attachEventListeners } from "./eventHandlers.js";
import { displayTable } from "./utils.js";

let cartList = sessionStorage.getItem("cartList");
cartList = cartList ? JSON.parse(cartList) : [];

displayTable(cartList);
attachEventListeners();
