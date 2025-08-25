import { API_METHODS } from '../constants';
import BaseAPIMethodArgs from './base-api-method-args.type';

type APIMethodArgsWithExtras = BaseAPIMethodArgs & {
  method?: keyof typeof API_METHODS;
  data?: unknown;
};

export default APIMethodArgsWithExtras;
