import { AxiosError, AxiosRequestConfig, AxiosResponse } from 'axios';
import { API_METHODS } from '../constants';
import BaseAPIMethodArgs from './base-api-method-args.type';
import { AnalyticEvent } from '@/constants';
import { FirebaseAnalyticsTypes } from '@react-native-firebase/analytics';

export interface Config extends AxiosRequestConfig {
  hideErrorToast?: (arg0: AxiosError) => boolean;
  showSuccessToast?: (arg0: AxiosResponse) => {
    text: string;
    textProps?: object;
  };
  analyticEvent?: {
    eventName: string;
    eventType?: AnalyticEvent;
    eventParams?: { [key: string]: unknown };
    options?: FirebaseAnalyticsTypes.AnalyticsCallOptions;
  };
}

type APIMethodArgsWithExtras = BaseAPIMethodArgs & {
  method?: keyof typeof API_METHODS;
  data?: unknown;
  config?: Config;
};

export default APIMethodArgsWithExtras;
