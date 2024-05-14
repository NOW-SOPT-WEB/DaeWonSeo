interface UserInfoProps {
	title: string;
	value: string;
}

function UserInfo({ title, value }: UserInfoProps) {
	return (
		<div className="flex h-10 w-1/2 items-center text-lg font-semibold">
			<h1 className="w-1/2 ">{title}</h1>
			<p className="flex w-1/2">{value}</p>
		</div>
	);
}

export default UserInfo;
