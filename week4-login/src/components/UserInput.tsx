interface UserInputProps {
	title: string;
}

function UserInput({ title }: UserInputProps) {
	return (
		<div className="flex">
			<h1>{title}</h1>
			<input className="bg-main-gradient" />
		</div>
	);
}

export default UserInput;
