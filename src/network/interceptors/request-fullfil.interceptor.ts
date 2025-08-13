import { InternalAxiosRequestConfig } from 'axios';

const onRequestFulfilled = (
  config:
    | InternalAxiosRequestConfig<unknown>
    | Promise<InternalAxiosRequestConfig<unknown>>,
) => config;

export default onRequestFulfilled;
