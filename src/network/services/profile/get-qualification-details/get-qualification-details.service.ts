// src/network/services/profile/get-profile-details.service.ts
import { API_METHODS } from '@/network/constants';
import { createAPIRequest } from '@/network/utilities';
import PROFILE_URLS from '../profile.urls';
import { useAuthStore } from '@/store/auth';

const getQualificationDetails = async (qualificationId: number | string) => {
  const userId = useAuthStore.getState().userId;
  const res = await createAPIRequest({
    method: API_METHODS.GET,
    url: `${PROFILE_URLS.GET_QUALIFICATIONS}/${qualificationId}`,
    config: { params: { userId } },
  });
  return res.data;
};

export default getQualificationDetails;
