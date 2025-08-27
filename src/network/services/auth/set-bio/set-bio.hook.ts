import { useCustomMutation } from '@/network/hooks';
import AUTH_QUERY_KEYS from '../auth.query-keys';
import setBio from './set-bio.service';

const useSetBio = (
  onSuccess?: () => void,
  onError?: (error: unknown) => void,
) => {
  return useCustomMutation({
    mutationKey: [AUTH_QUERY_KEYS.SET_BIO],
    mutationFn: setBio,
    onSuccess: onSuccess ?? (() => {}),
    onError: onError ?? (() => {}),
  });
};

export default useSetBio;
