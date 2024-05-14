import ExpandLess from '@/assets/svg/expand_less.svg?react';
import ExpandMore from '@/assets/svg/expand_more.svg?react';

interface ToggleProps {
	title: string;
	isToggled: boolean;
	onClick: () => void;
	children?: React.ReactNode;
}

function Toggle({ title, isToggled, onClick, children }: ToggleProps) {
	return (
		<>
			{isToggled ? (
				<>
					<div className="mb-10 flex w-1/2 items-center gap-2 text-lg font-semibold">
						<h1>{title}</h1>
						<button onClick={onClick}>
							<ExpandLess className="h-8 w-8" />
						</button>
					</div>
					{children}
				</>
			) : (
				<div className="flex w-1/2 items-center gap-2 text-lg font-semibold">
					<h1>{title}</h1>
					<button onClick={onClick}>
						<ExpandMore className="h-8 w-8" />
					</button>
				</div>
			)}
		</>
	);
}

export default Toggle;
