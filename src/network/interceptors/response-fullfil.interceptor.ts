import { AxiosResponse } from 'axios';

const onResponseFulfilled = (
  //The returned type is onFulfilled?: ((value: AxiosResponse<any, any>) => AxiosResponse<any, any>
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  response: AxiosResponse<any, any>,
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
): AxiosResponse<any, any> =>
  // implement response fulfillment
  response;

export default onResponseFulfilled;
