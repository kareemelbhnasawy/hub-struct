import axios from 'axios';
import Config from 'react-native-config';
import { API_HEADER_ACCEPT_LANGUAGE, API_HEADER_DEVICE } from '../constants';
import {
  abortRequestInterceptor,
  authInterceptor,
  connectionInterceptor,
  onRequestFulfilled,
  onRequestReject,
  onResponseFulfilled,
  onResponseReject,
} from '../interceptors';
import DEFAULT_LANGUAGE from '@/constants/default_language';

const APIHeaderLanguage: { key: string } = DEFAULT_LANGUAGE;

const client = axios.create({
  baseURL: Config.BASE_URL,
  timeout: Number(Config.API_TIMEOUT),
  headers: {
    [API_HEADER_ACCEPT_LANGUAGE]: APIHeaderLanguage?.key,
    device: API_HEADER_DEVICE,
  },
});

// request interceptors
client.interceptors.request.use(abortRequestInterceptor);
client.interceptors.request.use(authInterceptor);
client.interceptors.request.use(connectionInterceptor);
client.interceptors.request.use(onRequestFulfilled, onRequestReject);

// response interceptor
client.interceptors.response.use(onResponseFulfilled, onResponseReject);

export default client;
