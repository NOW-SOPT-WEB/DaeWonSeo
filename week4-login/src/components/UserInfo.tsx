interface UserInfoProps {
	title: string;
	value: string;
}

function UserInfo({ title, value }: UserInfoProps) {
	return (
		<div className="flex">
			<h1>{title}</h1>
			<p>{value}</p>
		</div>
	);
}

export default UserInfo;
