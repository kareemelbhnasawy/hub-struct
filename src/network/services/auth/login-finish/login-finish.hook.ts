import { useCustomMutation } from '@/network/hooks';
import { LoginFinishRequest, AuthorizationTokenResponse } from '../types';
import AUTH_QUERY_KEYS from '../auth.query-keys';
import loginFinish from './login-finish.service';

const useLoginFinish = (
  onSuccess?: (data: AuthorizationTokenResponse) => void,
  onError?: (error: unknown) => void,
) => {
  return useCustomMutation<LoginFinishRequest, AuthorizationTokenResponse>({
    mutationKey: [AUTH_QUERY_KEYS.LOGIN_FINISH],
    mutationFn: loginFinish,
    onSuccess: onSuccess ?? (() => {}),
    onError: onError ?? (() => {}),
  });
};

export default useLoginFinish;
