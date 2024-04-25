import { attachHeaderEventListeners } from "./HeaderEventHandlers.js";
import { attachSideEventListeners } from "./sideMenuEventHandlers.js";

export const attachCommonEventListener = () => {
  attachHeaderEventListeners();
  attachSideEventListeners();
};
