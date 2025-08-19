// abort API requests when needed
import { AxiosRequestConfig } from 'axios';

const abortRequestInterceptor = (
  config: AxiosRequestConfig,
): AxiosRequestConfig => {
  const abortController = new AbortController();
  config.signal = abortController.signal;
  setTimeout(() => {
    if (!abortController.signal.aborted) {
      abortController.abort();
    }
  }, Number(90000));
  return config;
};

export default abortRequestInterceptor;
