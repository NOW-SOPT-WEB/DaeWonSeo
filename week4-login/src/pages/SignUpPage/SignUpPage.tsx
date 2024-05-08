import { useNavigate } from 'react-router-dom';

import UserButton from '@/components/UserButton';
import UserInput from '@/components/UserInput';
import { MAIN_ROUTES } from '@/constants/routes';
import { useInputs } from '@/hooks/useInputs';

const initialInputs = {
	id: '',
	pw: '',
	nickName: '',
	phoneNumber: '',
};

function SignUpPage() {
	const { inputs, handleChange } = useInputs(initialInputs);
	const navigate = useNavigate();

	const handleClickBack = (): void => {
		navigate(-1);
	};

	console.log(inputs);

	return (
		<>
			<h1 className="mb-10 text-4xl font-bold">회원가입 페이지</h1>
			<div className="mt-20 flex h-full w-full flex-col items-center gap-16">
				<UserInput name={'id'} title={'ID'} value={inputs.id} onChange={handleChange} />
				<UserInput
					name={'pw'}
					title={'비밀번호'}
					value={inputs.pw}
					onChange={handleChange}
					children={
						<p className="text-[0.7rem] text-blue-400">
							비밀번호 형식은 8자 이상, 숫자, 특수문자, 영어 알파벳이 포함되어 있어야합니다.
						</p>
					}
				/>
				<UserInput name={'nickName'} title={'닉네임'} value={inputs.nickName} onChange={handleChange} />
				<UserInput
					name={'phoneNumber'}
					title={'전화번호'}
					value={inputs.phoneNumber}
					onChange={handleChange}
					children={<p className="text-[0.7rem] text-blue-400">전화번호 형식은 010-****-**** 입니다.</p>}
				/>
			</div>
			<div className="flex gap-9">
				<UserButton title={'회원가입'} />
				<UserButton title={'뒤로가기'} onClick={handleClickBack} />
			</div>
		</>
	);
}

export default SignUpPage;
