import { useState } from 'react';

import { phoneNumberFormatter } from '@/utils';
import { useErrors } from './useErrors';

export const useInputs = <T extends Record<string, string>>(initialState: T) => {
	const [inputs, setInputs] = useState<T>(initialState);
	const { errors, setErrors } = useErrors(initialState);

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

	return { inputs, errors, handleChange, setInputs };
};
