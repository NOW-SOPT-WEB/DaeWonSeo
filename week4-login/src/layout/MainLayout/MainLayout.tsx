import { Outlet } from 'react-router-dom';

function MainLayout() {
	return (
		<main className="flex h-screen items-center justify-center bg-main-gradient text-white ">
			<div className="flex h-[48rem] w-[40rem] flex-col items-center rounded bg-primary p-8">
				<div className="flex h-full w-full flex-col items-center justify-between">
					<Outlet />
				</div>
			</div>
		</main>
	);
}

export default MainLayout;
