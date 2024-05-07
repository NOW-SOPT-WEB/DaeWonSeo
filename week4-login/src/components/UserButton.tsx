interface UserButtonProps {
	title: string;
	onClick: () => void;
}

function UserButton({ title, onClick }: UserButtonProps) {
	return (
		<button onClick={onClick} className="bg-secondary h-10 w-24 rounded p-2 font-medium text-black">
			{title}
		</button>
	);
}

export default UserButton;
