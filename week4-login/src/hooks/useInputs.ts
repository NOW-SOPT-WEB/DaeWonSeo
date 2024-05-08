import { useState } from 'react';

import { phoneNumberFormatter } from '@/utils';

export const useInputs = <T extends Record<string, string>>(initialState: T) => {
	const [inputs, setInputs] = useState<T>(initialState);

	const initialErrorsState = Object.keys(initialState).reduce(
		(acc, key) => {
			acc[key] = false;
			return acc;
		},
		{} as Record<string, boolean>,
	);

	const [errors, setErrors] = useState<Record<string, boolean>>(initialErrorsState);

	const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
		const { name, value } = e.target;

		const formattedValue = name === 'phone' ? phoneNumberFormatter(value) : value;

		setInputs((prev) => ({
			...prev,
			[name]: name === 'phone' ? formattedValue : value,
		}));

		setErrors((prev) => ({
			...prev,
			[name]: formattedValue === '' ? true : false,
		}));
	};

	return { inputs, errors, handleChange };
};
