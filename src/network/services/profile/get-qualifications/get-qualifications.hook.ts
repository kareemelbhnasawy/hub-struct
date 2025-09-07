import { useCustomQuery } from '@/network/hooks';
import { getQualificationsResponse } from '../types';
import getQualifications from './get-qualifications.service';
import PROFILE_QUERY_KEYS from '../profile.query-keys';

const useGetQualifications = (
  onSuccess?: (data: getQualificationsResponse) => void,
  onError?: (error: unknown) => void,
) => {
  return useCustomQuery<unknown, getQualificationsResponse>({
    queryKey: [PROFILE_QUERY_KEYS.GET_QUALIFICATIONS],
    queryFn: getQualifications,
    onSuccess: onSuccess ?? (() => {}),
    onError: onError ?? (() => {}),
  });
};

export default useGetQualifications;
