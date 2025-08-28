import { useCustomMutation } from '@/network/hooks';
import { LogoutRequest, LogoutResponse } from '../types';
import AUTH_QUERY_KEYS from '../auth.query-keys';
import logout from './logout.service';

const useLogout = (
  onSuccess?: (data: LogoutResponse) => void,
  onError?: (error: unknown) => void,
) => {
  return useCustomMutation<LogoutRequest, LogoutResponse>({
    mutationKey: [AUTH_QUERY_KEYS.LOGOUT],
    mutationFn: logout,
    onSuccess: onSuccess ?? (() => {}),
    onError: onError ?? (() => {}),
  });
};

export default useLogout;
