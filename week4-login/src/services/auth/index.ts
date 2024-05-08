import { AxiosError } from 'axios';
import client from '@/services/client';

interface Response {
	code: number;
	message: string;
}

interface ResponseWithData<T> extends Response {
	data: T;
}

interface ResponseWithUserData {
	authenticationId: string;
	nickname: string;
	phone: string;
}

interface SiginInData {
	authenticationId: string;
	password: string;
}

interface SignUpData {
	authenticationId: string;
	password: string;
	nickname: string;
	phone: string;
}

interface UserPasswordData {
	previousPassword: string;
	newPassword: string;
	newPasswordVerification: string;
}

export const userSignIn = async <T>(siginInData: SiginInData): Promise<ResponseWithData<T>> => {
	try {
		const { headers } = await client.post<ResponseWithData<T>>('/member/login', siginInData);
		return headers.location;
	} catch (e) {
		const error = e as AxiosError<Response>;
		return Promise.reject(error);
	}
};

export const userSignUp = async (signUpData: SignUpData): Promise<Response> => {
	try {
		const { data } = await client.post<Response>('/member/join', signUpData);
		return data;
	} catch (e) {
		const error = e as AxiosError<Response>;
		return Promise.reject(error);
	}
};

export const getUserData = async <T>(memberId: number): Promise<ResponseWithUserData<T>> => {
	try {
		const { data } = await client.get<ResponseWithUserData<T>>('member/info', {
			headers: {
				memberId: memberId,
			},
		});
		const { authenticationId, nickname, phone } = data.data as ResponseWithUserData;
		return { authenticationId, nickname, phone };
	} catch (e) {
		const error = e as AxiosError<Response>;
		return Promise.reject(error);
	}
};

export const patchUserPassword = async (userPasswordData: UserPasswordData, memberId: number): Promise<Response> => {
	try {
		const { data } = await client.patch<Response>('/member/password', userPasswordData, {
			headers: {
				memberId: memberId,
			},
		});
		return data;
	} catch (e) {
		const error = e as AxiosError<Response>;
		return Promise.reject(error);
	}
};
