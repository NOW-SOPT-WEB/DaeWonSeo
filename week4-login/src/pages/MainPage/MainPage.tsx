import { useRef } from 'react';
import video from '@/assets/videos/week4-video.mp4';
import UserButton from '@/components/UserButton';
import { MAIN_ROUTES } from '@/constants/routes';
import { useNavigate, useParams } from 'react-router-dom';

function MainPage() {
	const navigate = useNavigate();
	const { id } = useParams();
	const videoRef = useRef<HTMLVideoElement>(null);

	const handleClickMyPage = () => {
		navigate(`${MAIN_ROUTES.MY_PAGE.path.replace(':id', `${id}`)}`);
	};

	const handleClickSignUp = () => {
		navigate(MAIN_ROUTES.SIGN_UP.path);
	};

	const handleMouseOver = () => {
		if (videoRef.current) videoRef.current.playbackRate = 2;
	};

	const handleMouseLeave = () => {
		if (videoRef.current) videoRef.current.playbackRate = 1;
	};

	return (
		<>
			<div>
				<video
					ref={videoRef}
					muted
					autoPlay
					loop
					preload="auto"
					onMouseOver={handleMouseOver}
					onMouseLeave={handleMouseLeave}
					className="cursor-pointer">
					<source src={video} />
				</video>
			</div>
			<div className="flex gap-9">
				<UserButton title={'내 정보'} onClick={handleClickMyPage} />
				<UserButton title={'회원가입'} onClick={handleClickSignUp} />
			</div>
		</>
	);
}

export default MainPage;
