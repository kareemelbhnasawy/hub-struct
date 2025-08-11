import API_METHOD_SERVICE_MAPPING from '../constants/api-method-service-mapping.constant';
import { APIMethodArgsWithExtras } from '../types';
import { AxiosResponse } from 'axios';

const createAPIRequest = async ({
  method,
  url,
  data,
  config,
  onFulFill,
  onReject,
}: APIMethodArgsWithExtras & {
  onFulFill?: (res: Promise<AxiosResponse<unknown, unknown>>) => void;
  onReject?: (error: unknown) => void;
}): Promise<AxiosResponse<unknown, unknown>> => {
  const APIMethod = API_METHOD_SERVICE_MAPPING[method!];
  let APIConfig: APIMethodArgsWithExtras = { url };
  if (config) {
    APIConfig = {
      ...APIConfig,
      config,
    };
  }
  if (data) {
    APIConfig = {
      ...APIConfig,
      data,
    };
  }
  try {
    const res: Promise<AxiosResponse<unknown, unknown>> =
      await APIMethod(APIConfig);
    onFulFill?.(res);
    return await res;
  } catch (error: unknown) {
    onReject?.(error);
    throw error;
  }
};

export default createAPIRequest;
