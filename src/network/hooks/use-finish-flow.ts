import { useCustomMutation } from '@/network/hooks';
import { createAPIRequest } from '@/network/utilities';
import { API_METHODS } from '@/network/constants';
import { LoginFinishRequest } from '../services/auth/types';

const finishFlowService = async (
  url: string,
  data: unknown,
): Promise<unknown> => {
  const res = await createAPIRequest({
    method: API_METHODS.POST,
    url: `${url}/finish`,
    data,
  });
  return res.data;
};

export const useFinishFlow = (
  url: string,
  onSuccess?: (data: unknown) => void,
  onError?: (error: unknown) => void,
) => {
  return useCustomMutation<LoginFinishRequest, unknown>({
    mutationKey: [`${url}_FINISH`],
    mutationFn: (data) => finishFlowService(url, data),
    onSuccess: onSuccess ?? (() => {}),
    onError: onError ?? (() => {}),
  });
};
