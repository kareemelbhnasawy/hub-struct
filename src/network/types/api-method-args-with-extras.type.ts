import BaseAPIMethodArgs from './base-api-method-args.type';

type APIMethodArgsWithExtras = BaseAPIMethodArgs & {
  method?: string;
  data?: unknown;
};

export default APIMethodArgsWithExtras;
