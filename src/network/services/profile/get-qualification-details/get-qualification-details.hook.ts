import { useCustomQuery } from '@/network/hooks';
import PROFILE_QUERY_KEYS from '../profile.query-keys';
import { QualificationDetailsResponse } from '@/screens/profile/qualification-details/interface';
import getQualificationDetails from './get-qualification-details.service';

const useGetQualificationDetails = (
  qualificationId: string,
  onSuccess?: (data: unknown) => void,
  onError?: (error: unknown) => void,
) => {
  return useCustomQuery<unknown, QualificationDetailsResponse>({
    queryKey: [PROFILE_QUERY_KEYS.GET_PROFILE_DETAILS],
    queryFn: () => getQualificationDetails(qualificationId),
    onSuccess: onSuccess ?? (() => {}),
    onError: onError ?? (() => {}),
  });
};

export default useGetQualificationDetails;
