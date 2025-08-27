import { useCustomMutation } from '@/network/hooks';
import AUTH_QUERY_KEYS from '../auth.query-keys';
import loginPin from './login-pin.service';

const useLoginPin = (
  onSuccess: (data: unknown) => void,
  onError?: (error: unknown) => void,
) => {
  return useCustomMutation({
    mutationKey: [AUTH_QUERY_KEYS.PIN_LOGIN],
    mutationFn: loginPin,
    onSuccess: onSuccess,
    onError: onError ?? (() => {}),
  });
};

export default useLoginPin;
