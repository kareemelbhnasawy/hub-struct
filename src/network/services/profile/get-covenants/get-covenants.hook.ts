import { useCustomQuery } from '@/network/hooks';
import PROFILE_QUERY_KEYS from '../profile.query-keys';
import getCovenants from './get-covenants.service';
import type { Covenant } from '@/screens/profile/covenants/interface';

const useGetCovenants = (
  onSuccess?: (data: Covenant) => void,
  onError?: (error: unknown) => void,
) => {
  return useCustomQuery<unknown, Covenant>({
    queryKey: [PROFILE_QUERY_KEYS.GET_COVENANTS],
    queryFn: getCovenants,
    onSuccess: onSuccess ?? (() => {}),
    onError: onError ?? (() => {}),
  });
};

export default useGetCovenants;
