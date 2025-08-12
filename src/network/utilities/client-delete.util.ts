import { BaseAPIMethodArgs } from '../types';
import { AxiosResponse } from 'axios';
import client from './client.util';

const clientDelete = ({
  url,
  config,
}: BaseAPIMethodArgs): Promise<AxiosResponse<unknown, unknown>> =>
  client.delete(url, config);

export default clientDelete;
