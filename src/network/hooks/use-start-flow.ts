import { useCustomMutation } from '@/network/hooks';
import { createAPIRequest } from '@/network/utilities';
import { API_METHODS } from '@/network/constants';
import { LoginStartResponse } from '../services/auth/types';

export interface StartFlowRequest {
  [key: string]: unknown;
}

const startFlowService = async (
  url: string,
  data: StartFlowRequest,
): Promise<LoginStartResponse> => {
  const res = await createAPIRequest({
    method: API_METHODS.POST,
    url: `${url}/start`,
    data,
  });
  return res.data as LoginStartResponse;
};

export const useStartFlow = (
  url: string,
  onSuccess?: (data: LoginStartResponse) => void,
  onError?: (error: unknown) => void,
) => {
  return useCustomMutation<StartFlowRequest, LoginStartResponse>({
    mutationKey: [`${url}_START`],
    mutationFn: (data) => startFlowService(url, data),
    onSuccess: onSuccess ?? (() => {}),
    onError: onError ?? (() => {}),
  });
};
