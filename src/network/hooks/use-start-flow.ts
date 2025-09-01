import { useCustomMutation } from '@/network/hooks';
import { createAPIRequest } from '@/network/utilities';
import { API_METHODS } from '@/network/constants';

export interface StartFlowRequest {
  [key: string]: unknown;
}

const startFlowService = async (
  url: string,
  data: unknown,
): Promise<unknown> => {
  const res = await createAPIRequest({
    method: API_METHODS.POST,
    url: `${url}/start`,
    data,
  });
  return res.data;
};

export const useStartFlow = (
  url: string,
  onSuccess?: (data: unknown) => void,
  onError?: (error: unknown) => void,
  mutationKey?: string,
) => {
  return useCustomMutation<StartFlowRequest, unknown>({
    mutationKey: [`${url}_START`, mutationKey],
    mutationFn: (data) => startFlowService(url, data),
    onSuccess: onSuccess ?? (() => {}),
    onError: onError ?? (() => {}),
  });
};
