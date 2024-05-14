export const phoneNumberFormatter = (phone: string) => {
	const formattedPhone = phone
		.replace(/[^0-9]/g, '')
		.replace(/^(\d{0,3})(\d{0,4})(\d{0,4})$/g, '$1-$2-$3')
		.replace(/(\-{1,2})$/g, '');

	return formattedPhone;
};

export const validatePassword = (password: string) => {
	const regex = /^(?=.*\d)(?=.*[a-zA-Z])(?=.*\W).{8,}$/;

	return regex.test(password);
};
