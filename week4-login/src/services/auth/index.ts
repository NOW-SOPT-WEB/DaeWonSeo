import client from '@/services/client';

interface Response {
	code: number;
	message: string;
}

interface ResponseWithData<T> extends Response {
	data: T;
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

export const userSignIn = async (siginInData: SiginInData): Promise<Response> => {
	try {
		const { data } = await client.post<Response>('/meber/login', siginInData);
		return data;
	} catch (e) {
		return Promise.reject(e);
	}
};
export const userSignUp = async (signUpData: SignUpData): Promise<Response> => {
	try {
		const { data } = await client.post<Response>('/member/join', signUpData);
		return data;
	} catch (e) {
		return Promise.reject(e);
	}
};
export const getUserData = async <T>(memberId: number): Promise<ResponseWithData<T>> => {
	try {
		const { data } = await client.get<ResponseWithData<T>>('member/info', {
			headers: {
				memberId: memberId,
			},
		});
		return data;
	} catch (e) {
		return Promise.reject(e);
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
		return Promise.reject(e);
	}
};
