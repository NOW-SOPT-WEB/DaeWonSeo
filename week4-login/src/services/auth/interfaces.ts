export interface Response {
	code: number;
	message: string;
}

export interface ResponseWithData<T> extends Response {
	data: T;
}

export interface UserData {
	authenticationId: string;
	nickname: string;
	phone: string;
}

export interface ResponseWithUserData {
	data: UserData;
}

export interface SiginInData {
	authenticationId: string;
	password: string;
}

export interface SignUpData {
	authenticationId: string;
	password: string;
	nickname: string;
	phone: string;
}

export interface UserPasswordData {
	previousPassword: string;
	newPassword: string;
	newPasswordVerification: string;
}
