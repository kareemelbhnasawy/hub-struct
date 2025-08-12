import { APIMethodArgsWithExtras } from '../types';
import { AxiosResponse } from 'axios';
import client from './client.util';

const clientPatch = ({
  url,
  data,
  config,
}: APIMethodArgsWithExtras): Promise<AxiosResponse<unknown, unknown>> =>
  client.patch(url, data, config);

export default clientPatch;
