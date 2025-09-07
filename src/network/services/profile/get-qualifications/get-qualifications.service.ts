import { API_METHODS } from '@/network/constants';
import { createAPIRequest } from '@/network/utilities';
import { getQualificationsResponse } from '../types';
import PROFILE_URLS from '../profile.urls';
import { useAuthStore } from '@/store/auth';

const getQualifications = async (): Promise<getQualificationsResponse> => {
  const userId = useAuthStore.getState().userId;
  const res = await createAPIRequest({
    method: API_METHODS.GET,
    url: PROFILE_URLS.GET_QUALIFICATIONS,
    config: {
      params: {
        userId: userId,
      },
    },
  });
  return res.data as getQualificationsResponse;
};

export default getQualifications;
