import { Navigate } from "react-router-dom";

import { MAIN_ROUTES } from "@/constants/routes";
import MainLayout from "@/layout/MainLayout/MainLayout";
import MainPage from "@/pages/MainPage/MainPage";
import SignInPage from "@/pages/SignInPage/SignInPage";
import SignUpPage from "@/pages/SignUpPage/SignUpPage";
import MyPage from "@/pages/MyPage/MyPage";

export const MainRoutes = {
  path: "/",
  element: <MainLayout />,
  children: [
    {
      path: "/",
      element: <Navigate replace to={MAIN_ROUTES.MAIN.path} />,
    },
    {
      path: MAIN_ROUTES.MAIN.path,
      element: <MainPage />,
    },
    {
      path: MAIN_ROUTES.SIGN_IN.path,
      element: <SignInPage />,
    },
    {
      path: MAIN_ROUTES.SIGN_UP.path,
      element: <SignUpPage />,
    },
    {
      path: MAIN_ROUTES.MY_PAGE.path,
      element: <MyPage />,
    },
  ],
};
