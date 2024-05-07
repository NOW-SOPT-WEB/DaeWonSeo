import { useRoutes } from "react-router-dom";
import { MainRoutes } from "@/routes/MainRoutes";

function Routes() {
  return useRoutes([MainRoutes]);
}

export default Routes;
