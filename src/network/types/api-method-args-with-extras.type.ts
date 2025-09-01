import { AxiosRequestConfig, AxiosResponse } from 'axios';
import { API_METHODS } from '../constants';
import BaseAPIMethodArgs from './base-api-method-args.type';

interface Config extends AxiosRequestConfig {
  suppressErrorToast: (arg0: AxiosResponse) => boolean;
}

type APIMethodArgsWithExtras = BaseAPIMethodArgs & {
  method?: keyof typeof API_METHODS;
  data?: unknown;
  config?: Config;
};

export default APIMethodArgsWithExtras;
