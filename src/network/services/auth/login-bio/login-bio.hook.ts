import { useCustomMutation } from '@/network/hooks';
import AUTH_QUERY_KEYS from '../auth.query-keys';
import loginBio from './login-bio.service';

const useLoginBio = (
  onSuccess: (data: unknown) => void,
  onError?: (error: unknown) => void,
) => {
  return useCustomMutation({
    mutationKey: [AUTH_QUERY_KEYS.BIO_LOGIN],
    mutationFn: loginBio,
    onSuccess: onSuccess,
    onError: onError ?? (() => {}),
  });
};

export default useLoginBio;
