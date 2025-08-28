import APIMethodArgsWithExtras from '../types/api-method-args-with-extras.type';
import { AxiosResponse } from 'axios';
import client from './client.util';

const clientPost = ({
  url,
  data,
  config,
}: APIMethodArgsWithExtras): Promise<AxiosResponse<unknown, unknown>> =>
  client.post(url, data, config);

export default clientPost;
