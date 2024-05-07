import UserButton from '@/components/UserButton';
import UserInput from '@/components/UserInput';

function SignUpPage() {
	return (
		<>
			<h1 className="mb-10 text-4xl font-bold">회원가입 페이지</h1>
			<div className="mt-20 flex h-full w-full flex-col items-center gap-16">
				<UserInput title={'ID'} />
				<UserInput title={'비밀번호'}>
					<p className="text-[0.7rem] text-blue-400">
						비밀번호 형식은 8자 이상, 숫자, 특수문자, 영어 알파벳이 포함되어 있어야합니다.
					</p>
				</UserInput>
				<UserInput title={'닉네임'} />
				<UserInput title={'전화번호'}>
					<p className="text-[0.7rem] text-blue-400">전화번호 형식은 010-****-**** 입니다.</p>
				</UserInput>
			</div>
			<div className="flex gap-9">
				<UserButton title={'회원가입'} />
				<UserButton title={'뒤로가기'} />
			</div>
		</>
	);
}

export default SignUpPage;
