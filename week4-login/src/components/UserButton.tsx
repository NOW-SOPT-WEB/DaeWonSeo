interface UserButtonProps {
	title: string;
	onClick: () => void;
}

function UserButton({ title, onClick }: UserButtonProps) {
	return (
		<button type="button" onClick={onClick} className="rounded bg-secondary px-6 py-3 font-medium text-black">
			{title}
		</button>
	);
}

export default UserButton;
