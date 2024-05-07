import { useState } from 'react';
import { useNavigate } from 'react-router-dom';

import UserInput from '@/components/UserInput';
import UserButton from '@/components/UserButton';
import UserInfo from '@/components/UserInfo';
import Toggle from '@/components/Toggle';
import { MAIN_ROUTES } from '@/constants/routes';

function MyPage() {
	const [isToggled, setIsToggled] = useState(false);

	const navigate = useNavigate();

	const handleToggle = (): void => {
		setIsToggled((prev) => !prev);
	};

	const handleClickHome = (): void => {
		navigate(MAIN_ROUTES.MAIN.path);
	};

	return (
		<>
			<div className="mb-10 flex w-full flex-col items-center gap-2">
				<h1 className="mb-4 text-4xl font-bold">마이 페이지</h1>
				<UserInfo title={'ID'} value={'suwonthugger'} />
				<UserInfo title={'닉네임'} value={'수원떠거'} />
				<UserInfo title={'전화번호'} value={'010-9041-2937'} />
			</div>
			<div className="flex h-full w-full flex-col items-center">
				<Toggle
					title={'비밀번호 변경'}
					isToggled={isToggled}
					onClick={handleToggle}
					children={
						<div className="flex w-full flex-col items-center gap-8">
							<UserInput title={'기존 비밀번호'} />
							<UserInput title={'신규 비밀번호'} />
							<UserInput title={'비밀번호 확인'} />
							<UserButton title={'비밀번호 변경'} />
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
