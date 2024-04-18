import { attachEventListeners } from "./eventHandlers.js";
import { displayItems } from "./utils.js";
import { SHOPPING_LIST } from "../../../constants/item.js";

displayItems(SHOPPING_LIST);
attachEventListeners();
