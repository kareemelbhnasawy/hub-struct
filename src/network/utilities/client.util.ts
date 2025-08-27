import axios from 'axios';
import Config from 'react-native-config';
import API_HEADER_ACCEPT_LANGUAGE from '../constants/api-header-accept-lang.constant';
import API_HEADER_DEVICE from '../constants/api-header-device.constant';
import onRequestFulfilled from '../interceptors/request-fullfil.interceptor';
import onRequestReject from '../interceptors/request-reject.interceptor';
import onResponseFulfilled from '../interceptors/response-fullfil.interceptor';
import onResponseReject from '../interceptors/response-reject.interceptor';
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
client.interceptors.request.use(onRequestFulfilled, onRequestReject);

// response interceptor
client.interceptors.response.use(onResponseFulfilled, onResponseReject);

export default client;
