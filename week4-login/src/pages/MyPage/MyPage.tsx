import { useEffect, useState } from 'react';
import { useNavigate, useParams } from 'react-router-dom';
import { isAxiosError } from 'axios';

import UserInput from '@/components/UserInput';
import UserButton from '@/components/UserButton';
import UserInfo from '@/components/UserInfo';
import Toggle from '@/components/Toggle';
import { MAIN_ROUTES } from '@/constants/routes';
import { getUserData, patchUserPassword } from '@/services/auth';
import { useInputs } from '@/hooks/useInputs';

const initialUserInfo = {
	authenticationId: '',
	nickname: '',
	phone: '',
};

const initialState = {
	previousPassword: '',
	newPassword: '',
	newPasswordVerification: '',
};

function MyPage() {
	const [userInfo, setUserInfo] = useState(initialUserInfo);
	const { inputs, handleChange, setInputs } = useInputs(initialState);
	const [isToggled, setIsToggled] = useState(false);
	const { id } = useParams();

	const navigate = useNavigate();

	const handleToggle = (): void => {
		setIsToggled((prev) => !prev);
	};

	const handleClickHome = (): void => {
		navigate(MAIN_ROUTES.MAIN.path);
	};

	const fetchUserData = async (id: number): Promise<void> => {
		try {
			const data = await getUserData(id);
			const { authenticationId, nickname, phone } = data;
			setUserInfo({ authenticationId: authenticationId, nickname: nickname, phone: phone });
		} catch (e) {
			if (isAxiosError(e)) {
				alert(e.response?.data.message);
			}
		}
	};

	const handleChangePassword = async (): Promise<void> => {
		try {
			const isInputsEmpty = Object.values(inputs).some((value) => value === '');

			if (isInputsEmpty) {
				alert('입력 값을 확인해주세요~');
				return;
			}

			await patchUserPassword(inputs, Number(id));

			alert('비밀번호 변경이 완료되었습니다.');
			setInputs(initialState);
		} catch (e) {
			if (isAxiosError(e)) {
				alert(e.response?.data.message);
			}
		}
	};

	useEffect(() => {
		fetchUserData(Number(id));
	}, [id]);

	return (
		<>
			<div className="mb-10 flex w-full flex-col items-center gap-2">
				<h1 className="mb-4 text-4xl font-bold">마이 페이지</h1>
				<UserInfo title={'ID'} value={userInfo.authenticationId} />
				<UserInfo title={'닉네임'} value={userInfo.nickname} />
				<UserInfo title={'전화번호'} value={userInfo.phone} />
			</div>
			<div className="flex h-full w-full flex-col items-center">
				<Toggle
					title={'비밀번호 변경'}
					isToggled={isToggled}
					onClick={handleToggle}
					children={
						<div className="flex w-full flex-col items-center gap-8">
							<UserInput
								title={'기존 비밀번호'}
								name={'previousPassword'}
								value={inputs.previousPassword}
								isPassword={true}
								onChange={handleChange}
							/>
							<UserInput
								title={'신규 비밀번호'}
								name={'newPassword'}
								value={inputs.newPassword}
								isPassword={true}
								onChange={handleChange}
							/>
							<UserInput
								title={'비밀번호 확인'}
								name={'newPasswordVerification'}
								value={inputs.newPasswordVerification}
								isPassword={true}
								onChange={handleChange}
							/>
							<UserButton title={'비밀번호 변경'} onClick={handleChangePassword} />
						</div>
					}
				/>
			</div>

			<div className="flex gap-9">
				<UserButton title={'홈으로'} onClick={handleClickHome} />
			</div>
		</>
	);
}

export default MyPage;
