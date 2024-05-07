interface UserButtonProps {
	title: string;
}

function UserButton({ title }: UserButtonProps) {
	return <button className="bg-secondary rounded p-2 font-medium text-black">{title}</button>;
}

export default UserButton;
