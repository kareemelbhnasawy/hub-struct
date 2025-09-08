import { useCustomQuery } from '@/network/hooks';
import PROFILE_QUERY_KEYS from '../profile.query-keys';
import getProfileDetails from './get-person-details.service';

type PersonDetailsResponse = {
  primaryInfo: {
    name: string;
    birthDateHijri: string;
    birthDateGregorian: string;
    age: string;
    gender: string;
    nationality: string;
    nationalId: string;
  };
  jobInfo: {
    employeeNumber: string;
    classificationGuide: string;
    jobTitle: string;
    rank: string;
    effectiveManagement: string;
    management: string;
  };
  contactInfo: {
    mobileNumber: string;
    workExtension: string;
    address: string;
    emailAddress: string;
  };
  coordinates: {
    latitude: string;
    longitude: string;
  };
};

const useGetPersonDetails = (paramId?: string) => {
  return useCustomQuery<unknown, PersonDetailsResponse>({
    queryKey: [PROFILE_QUERY_KEYS.GET_PROFILE_DETAILS],
    queryFn: () => getProfileDetails(paramId),
  });
};

export default useGetPersonDetails;
