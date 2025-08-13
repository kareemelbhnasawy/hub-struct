import { AxiosError } from 'axios';

const onRequestReject = (error: AxiosError): Promise<AxiosError> =>
  Promise.reject(error);
export default onRequestReject;
