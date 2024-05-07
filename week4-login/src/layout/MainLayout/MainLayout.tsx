import { Outlet } from 'react-router-dom';

function MainLayout() {
	return (
		<main className="flex h-screen items-center justify-center bg-main-gradient text-white ">
			<div className="h-[48rem] w-[36rem] bg-primary">
				<Outlet />
			</div>
		</main>
	);
}

export default MainLayout;
