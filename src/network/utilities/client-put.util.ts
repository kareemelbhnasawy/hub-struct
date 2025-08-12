import { APIMethodArgsWithExtras } from '../types';
import { AxiosResponse } from 'axios';
import client from './client.util';

const clientPut = ({
  url,
  data,
  config,
}: APIMethodArgsWithExtras): Promise<AxiosResponse<unknown, unknown>> =>
  client.put(url, data, config);

export default clientPut;
