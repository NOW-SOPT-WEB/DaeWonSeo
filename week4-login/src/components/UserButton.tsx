interface UserButtonProps {
	title: string;
	onClick?: () => void;
	isSubmit?: boolean;
}

function UserButton({ title, onClick, isSubmit = false }: UserButtonProps) {
	return (
		<button
			type={isSubmit ? 'submit' : 'button'}
			onClick={onClick}
			className="rounded bg-secondary px-6 py-3 font-medium text-black">
			{title}
		</button>
	);
}

export default UserButton;
