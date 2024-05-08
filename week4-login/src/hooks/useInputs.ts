import { useState } from 'react';

// 제네릭 타입 T를 사용하여 함수를 정의합니다.
export const useInputs = <T extends Record<string, string>>(initialState: T) => {
	const [inputs, setInputs] = useState<T>(initialState);

	const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
		const { name, value } = e.target;
		setInputs((prev) => ({
			...prev,
			[name]: value,
		}));
	};

	return { inputs, handleChange };
};
