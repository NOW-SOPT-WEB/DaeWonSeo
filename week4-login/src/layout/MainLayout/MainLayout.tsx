import { Outlet } from "react-router-dom";

function MainLayout() {
  return (
    <main className="flex justify-center items-center bg-main-gradient h-screen text-white">
      <div className="bg-primary w-[36rem] h-[48rem] ">
        <Outlet />
      </div>
    </main>
  );
}

export default MainLayout;
