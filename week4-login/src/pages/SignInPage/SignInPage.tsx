import { useNavigate } from 'react-router-dom';
import { isAxiosError } from 'axios';

import UserInput from '@/components/UserInput';
import UserButton from '@/components/UserButton';
import { MAIN_ROUTES } from '@/constants/routes';
import loginImage from '@/assets/images/login-title.png';
import { useInputs } from '@/hooks/useInputs';
import { userSignIn } from '@/services/auth';

const initialInputs = {
	authenticationId: '',
	password: '',
};

function SignInPage() {
	const { inputs, errors, handleChange } = useInputs(initialInputs);

	const navigate = useNavigate();

	const handleClickSignUp = (): void => {
		navigate(MAIN_ROUTES.SIGN_UP.path);
	};

	const handleClickSignIn = async (): Promise<void> => {
		try {
			const isInputsEmpty = Object.values(inputs).some((value) => value === '');

			if (isInputsEmpty) {
				alert('입력 값을 확인해주세요~');
				return;
			}

			const memberId = await userSignIn(inputs);
			navigate(MAIN_ROUTES.MAIN.path.replace(':id', `${memberId}`));
		} catch (e) {
			if (isAxiosError(e)) {
				alert(e.response?.data.message);
			}
		}
	};

	return (
		<>
			<h1 className="mb-20 text-5xl font-bold">Login</h1>
			<img src={loginImage} className="h-48 rounded" />
			<div className="mt-20 flex h-full w-full flex-col items-center gap-14">
				<UserInput
					title={'ID'}
					name={'authenticationId'}
					value={inputs.authenticationId}
					onChange={handleChange}
					children={
						errors.authenticationId ? <p className="text-[0.7rem] text-red-400">아이디를 입력해주세요.</p> : null
					}
				/>
				<UserInput
					title={'비밀번호'}
					name={'password'}
					value={inputs.password}
					isPassword={true}
					onChange={handleChange}
					children={errors.password ? <p className="text-[0.7rem] text-red-400">비밀번호를 입력해주세요.</p> : null}
				/>
			</div>
			<div className="flex gap-9">
				<UserButton title={'로그인'} onClick={handleClickSignIn} />
				<UserButton title={'회원가입'} onClick={handleClickSignUp} />
			</div>
		</>
	);
}

export default SignInPage;
