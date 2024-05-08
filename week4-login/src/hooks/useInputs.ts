import { ChangeEvent, useState } from 'react';

interface InitialStateType {
	[name: string]: string;
}

export const useInputs = (initialState: InitialStateType) => {
	const [inputs, setInputs] = useState<InitialStateType>(initialState);

	const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
		const { name, value } = e.target;
		setInputs((prev) => ({
			...prev,
			[name]: value,
		}));
	};

	return { inputs, handleChange };
};
