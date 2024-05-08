import { useNavigate } from 'react-router-dom';

import UserButton from '@/components/UserButton';
import UserInput from '@/components/UserInput';
import { useInputs } from '@/hooks/useInputs';
import { userSignUp } from '@/services/auth';

const initialInputs = {
	authenticationId: '',
	password: '',
	nickname: '',
	phone: '',
};

function SignUpPage() {
	const { inputs, handleChange } = useInputs(initialInputs);
	const navigate = useNavigate();

	const handleClickBack = (): void => {
		navigate(-1);
	};

	const handleSignUp = async (): Promise<void> => {
		try {
			const response = await userSignUp(inputs);
			console.log(response);
		} catch (e) {
			console.log(e);
		}
	};

	return (
		<>
			<h1 className="mb-10 text-4xl font-bold">회원가입 페이지</h1>
			<div className="mt-20 flex h-full w-full flex-col items-center gap-16">
				<UserInput name={'authenticationId'} title={'ID'} value={inputs.authenticationId} onChange={handleChange} />
				<UserInput
					name={'password'}
					title={'비밀번호'}
					value={inputs.password}
					onChange={handleChange}
					children={
						<p className="text-[0.7rem] text-blue-400">
							비밀번호 형식은 8자 이상, 숫자, 특수문자, 영어 알파벳이 포함되어 있어야합니다.
						</p>
					}
				/>
				<UserInput name={'nickname'} title={'닉네임'} value={inputs.nickname} onChange={handleChange} />
				<UserInput
					name={'phone'}
					title={'전화번호'}
					value={inputs.phone}
					onChange={handleChange}
					children={<p className="text-[0.7rem] text-blue-400">전화번호 형식은 010-****-**** 입니다.</p>}
				/>
			</div>
			<div className="flex gap-9">
				<UserButton title={'회원가입'} onClick={handleSignUp} />
				<UserButton title={'뒤로가기'} onClick={handleClickBack} />
			</div>
		</>
	);
}

export default SignUpPage;
