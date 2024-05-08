import axios, { AxiosInstance, AxiosRequestConfig } from 'axios';
import config from '@/services/config/config';

interface AxiosConfig {
	baseURL: string;
	headers: {
		'Content-Type': 'application/json' | 'multipart/form-data';
	};
}

const axiosConfig: AxiosRequestConfig<AxiosConfig> = {
	baseURL: config.API_URL,
	headers: { 'Content-Type': 'application/json' },
};

const client: AxiosInstance = axios.create(axiosConfig);

export default client;
