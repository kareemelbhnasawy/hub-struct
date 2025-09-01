import { AxiosError, AxiosRequestConfig, AxiosResponse } from 'axios';
import { API_METHODS } from '../constants';
import BaseAPIMethodArgs from './base-api-method-args.type';

interface Config extends AxiosRequestConfig {
  hideErrorToast?: (arg0: AxiosError) => boolean;
  showSuccessToast?: (arg0: AxiosResponse) => {
    text: string;
    textProps?: object;
  };
}

type APIMethodArgsWithExtras = BaseAPIMethodArgs & {
  method?: keyof typeof API_METHODS;
  data?: unknown;
  config?: Config;
};

export default APIMethodArgsWithExtras;
