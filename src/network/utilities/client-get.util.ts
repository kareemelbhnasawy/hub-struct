import { BaseAPIMethodArgs } from '../types';
import { AxiosResponse } from 'axios';
import client from './client.util';

const clientGet = async ({
  url,
  config,
}: BaseAPIMethodArgs): Promise<AxiosResponse<unknown, unknown>> =>
  client.get(url, config);

export default clientGet;
