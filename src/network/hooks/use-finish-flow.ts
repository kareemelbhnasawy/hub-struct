import { useCustomMutation } from '@/network/hooks';
import { createAPIRequest } from '@/network/utilities';
import { API_METHODS } from '@/network/constants';
import {
  LoginFinishRequest,
  AuthorizationTokenResponse,
} from '../services/auth/types';

const finishFlowService = async (
  url: string,
  data: LoginFinishRequest,
): Promise<AuthorizationTokenResponse> => {
  const res = await createAPIRequest({
    method: API_METHODS.POST,
    url: `${url}/finish`,
    data,
  });
  return res.data as AuthorizationTokenResponse;
};

export const useFinishFlow = (
  url: string,
  onSuccess?: (data: AuthorizationTokenResponse) => void,
  onError?: (error: unknown) => void,
) => {
  return useCustomMutation<LoginFinishRequest, AuthorizationTokenResponse>({
    mutationKey: [`${url}_FINISH`],
    mutationFn: (data) => finishFlowService(url, data),
    onSuccess: onSuccess ?? (() => {}),
    onError: onError ?? (() => {}),
  });
};
