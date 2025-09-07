// src/network/services/profile/get-profile-details.service.ts
import { API_METHODS } from '@/network/constants';
import { createAPIRequest } from '@/network/utilities';
import PROFILE_URLS from '../profile.urls';
import { useAuthStore } from '@/store/auth';

const getQualificationDetails = async (qualificationId: number | string) =>{
  const email = useAuthStore.getState().email;
  const res = await createAPIRequest({
    method: API_METHODS.GET,
    url: `${PROFILE_URLS.GET_QUALIFICATION_DETAILS}/${qualificationId}`,
    config: { params: { email } },
  });
    return res.data;
};

export default getQualificationDetails;
