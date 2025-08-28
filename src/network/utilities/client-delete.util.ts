import BaseAPIMethodArgs from '../types/base-api-method-args.type';
import { AxiosResponse } from 'axios';
import client from './client.util';

const clientDelete = ({
  url,
  config,
}: BaseAPIMethodArgs): Promise<AxiosResponse<unknown, unknown>> =>
  client.delete(url, config);

export default clientDelete;
