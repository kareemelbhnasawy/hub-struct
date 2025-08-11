import { AxiosRequestConfig } from 'axios';

type BaseAPIMethodArgs = {
  url: string;
  config?: AxiosRequestConfig;
};

export default BaseAPIMethodArgs;
