import { useCustomQuery } from '@/network/hooks';
import PROFILE_QUERY_KEYS from '../profile.query-keys';
import getProfileDetails from './get-person-details.service';

type PersonDetailsResponse = {
  primaryInfo: {
    name: string;
    birthDate: string;
    age: string;
    gender: string;
    nationality: string;
    nationalId: string;
  };
  contactInfo: {
    mobileNumber: string;
    workExtension: string;
    address: string;
  };
};

const useGetPersonDetails = () => {
  return useCustomQuery<unknown, PersonDetailsResponse>({
    queryKey: [PROFILE_QUERY_KEYS.GET_PROFILE_DETAILS],
    queryFn: getProfileDetails,
  });
};

export default useGetPersonDetails;
