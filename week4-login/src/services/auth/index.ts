import { AxiosError } from 'axios';

import client from '@/services/client';
import {
	Response,
	ResponseWithData,
	UserData,
	ResponseWithUserData,
	SiginInData,
	SignUpData,
	UserPasswordData,
} from '@/services/auth/interfaces';

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

export const getUserData = async (memberId: number): Promise<UserData> => {
	try {
		const { data } = await client.get<ResponseWithUserData>('member/info', {
			headers: {
				memberId: memberId,
			},
		});
		const { authenticationId, nickname, phone } = data.data;
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
