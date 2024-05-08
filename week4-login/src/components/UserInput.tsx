import { useRef } from 'react';

interface UserInputProps {
	name: string;
	title: string;
	value: string;
	isPassword?: boolean;
	isError?: boolean;
	onChange: (event: React.ChangeEvent<HTMLInputElement>) => void;
	children?: React.ReactNode;
}

function UserInput({ name, title, value, isPassword = false, isError = false, onChange, children }: UserInputProps) {
	const input = useRef<HTMLInputElement>(null);
	let inputStyle = 'h-full w-full rounded bg-main-gradient p-3 outline-none';

	if (isError) {
		input.current?.focus();
		inputStyle += ' border-2 border-red-400';
	}

	return (
		<form className="flex h-10 w-5/6 items-center text-lg font-semibold ">
			<h1 className="w-1/4 ">{title}</h1>
			<div className="flex w-3/4 flex-col gap-4">
				<input
					ref={input}
					name={name}
					value={value}
					onChange={onChange}
					type={isPassword ? 'password' : 'text'}
					className={inputStyle}
				/>
				{children}
			</div>
		</form>
	);
}

export default UserInput;
