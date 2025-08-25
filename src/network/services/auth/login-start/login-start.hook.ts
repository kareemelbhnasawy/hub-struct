import { useCustomMutation } from '@/network/hooks';
import { LoginStartRequest, LoginStartResponse } from '../types';
import AUTH_QUERY_KEYS from '../auth.query-keys';
import loginStart from './login-start.service';

const useLoginStart = (
  onSuccess?: (data: LoginStartResponse) => void,
  onError?: (error: unknown) => void,
) => {
  return useCustomMutation<LoginStartRequest, LoginStartResponse>({
    mutationKey: [AUTH_QUERY_KEYS.LOGIN_START],
    mutationFn: loginStart,
    onSuccess: onSuccess ?? (() => {}),
    onError: onError ?? (() => {}),
  });
};

export default useLoginStart;
