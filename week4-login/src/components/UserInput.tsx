interface UserInputProps {
	title: string;
	children?: React.ReactNode;
}

function UserInput({ title, children }: UserInputProps) {
	return (
		<form className="flex h-10 w-5/6 items-center text-lg font-semibold">
			<h1 className="w-1/4 ">{title}</h1>
			<div className="flex w-3/4 flex-col gap-4">
				<input className="h-full w-full rounded bg-main-gradient p-3" />
				{children}
			</div>
		</form>
	);
}

export default UserInput;
