import { useCustomMutation } from '@/network/hooks';
import { createAPIRequest } from '@/network/utilities';
import { API_METHODS } from '@/network/constants';
import { LoginFinishRequest } from '../services/auth/types';
import { Config } from '../types/api-method-args-with-extras.type';

const finishFlowService = async (
  url: string,
  data: unknown,
  config: Config,
): Promise<unknown> => {
  const res = await createAPIRequest({
    method: API_METHODS.POST,
    url: `${url}/finish`,
    data,
    config,
  });
  return res.data;
};

export const useFinishFlow = (props: {
  url: string;
  onSuccess?: (data: unknown) => void;
  onError?: (error: unknown) => void;
  config: Config;
}) => {
  const { url, onSuccess, onError, config } = props;
  return useCustomMutation<LoginFinishRequest, unknown>({
    mutationKey: [`${url}_FINISH`],
    mutationFn: (data) => finishFlowService(url, data, config),
    onSuccess: onSuccess ?? (() => {}),
    onError: onError ?? (() => {}),
  });
};
