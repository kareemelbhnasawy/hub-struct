import { useCustomQuery } from '@/network/hooks';
import { HeaderResponse } from '../types';
import profileHeader from './profile-headers.service';
import PROFILE_QUERY_KEYS from '../profile.query-keys';

const useProfileHeader = (
  onSuccess?: (data: HeaderResponse) => void,
  onError?: (error: unknown) => void,
) => {
  return useCustomQuery<unknown, HeaderResponse>({
    queryKey: [PROFILE_QUERY_KEYS.HEADER],
    queryFn: profileHeader,
    onSuccess: onSuccess ?? (() => {}),
    onError: onError ?? (() => {}),
  });
};

export default useProfileHeader;
