import { useCustomMutation } from '@/network/hooks';
import AUTH_QUERY_KEYS from '../auth.query-keys';
import removeBio from './remove-bio.service';

const useRemoveBio = (
  onSuccess?: () => void,
  onError?: (error: unknown) => void,
) => {
  return useCustomMutation({
    mutationKey: [AUTH_QUERY_KEYS.REMOVE_BIO],
    mutationFn: removeBio,
    onSuccess: onSuccess ?? (() => {}),
    onError: onError ?? (() => {}),
  });
};

export default useRemoveBio;
