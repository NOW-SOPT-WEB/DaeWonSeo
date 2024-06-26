import { useState } from 'react';

import { phoneNumberFormatter } from '@/utils';
import { useErrors } from '@/hooks/useErrors';

export const useInputs = <T extends Record<string, string>>(initialState: T) => {
	const [inputs, setInputs] = useState<T>(initialState);
	const { errors, setErrors } = useErrors(initialState);

	const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
		const { name, value } = e.target;

		const formattedValue = name === 'phone' ? phoneNumberFormatter(value).trim() : value.trim();

		setInputs((prev) => ({
			...prev,
			[name]: formattedValue,
		}));

		setErrors((prev) => ({
			...prev,
			[name]: formattedValue === '' ? true : false,
		}));
	};

	return { inputs, errors, setErrors, handleChange, setInputs };
};
