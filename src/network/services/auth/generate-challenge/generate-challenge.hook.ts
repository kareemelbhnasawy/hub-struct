import { useCustomMutation } from '@/network/hooks';
import AUTH_QUERY_KEYS from '../auth.query-keys';
import generateChallenge from './generate-challenge.service';

const useGenerateChallenge = (
  onSuccess?: () => void,
  onError?: (error: unknown) => void,
) => {
  return useCustomMutation({
    mutationKey: [AUTH_QUERY_KEYS.SET_BIO],
    mutationFn: generateChallenge,
    onSuccess: onSuccess ?? (() => {}),
    onError: onError ?? (() => {}),
  });
};

export default useGenerateChallenge;
