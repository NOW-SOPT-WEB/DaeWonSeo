import { useState } from 'react';

export const useErrors = <T extends Record<string, string>>(initialState: T) => {
	const initialErrorsState = Object.keys(initialState).reduce(
		(acc, key) => {
			acc[key] = false;
			return acc;
		},
		{} as Record<string, boolean>,
	);

	const [errors, setErrors] = useState<Record<string, boolean>>(initialErrorsState);

	return { errors, setErrors, initialErrorsState };
};
