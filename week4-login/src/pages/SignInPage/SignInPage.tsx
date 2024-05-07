import { useNavigate } from 'react-router-dom';

import UserInput from '@/components/UserInput';
import UserButton from '@/components/UserButton';
import { MAIN_ROUTES } from '@/constants/routes';
import loginImage from '@/assets/images/login-title.png';

function SignInPage() {
	const navigate = useNavigate();

	const handleClickSignUp = (): void => {
		navigate(MAIN_ROUTES.SIGN_UP.path);
	};

	const handleClickSignIn = (): void => {
		navigate(MAIN_ROUTES.SIGN_IN.path);
	};

	return (
		<>
			<h1 className="mb-20 text-5xl font-bold">Login</h1>
			<img src={loginImage} className="h-48 rounded" />
			<div className="mt-20 flex h-full w-full flex-col items-center gap-14">
				<UserInput title={'ID'} />
				<UserInput title={'비밀번호'} />
			</div>
			<div className="flex gap-9">
				<UserButton title={'로그인'} onClick={handleClickSignIn} />
				<UserButton title={'회원가입'} onClick={handleClickSignUp} />
			</div>
		</>
	);
}

export default SignInPage;
