// src/network/services/profile/get-profile-details.service.ts
import { API_METHODS } from '@/network/constants';
import { createAPIRequest } from '@/network/utilities';
import PROFILE_URLS from '../profile.urls';
import { useAuthStore } from '@/store/auth';

const getProfileDetails = async () =>{
  const email = useAuthStore.getState().email;
  const res = await createAPIRequest({
    method: API_METHODS.GET,
    url: PROFILE_URLS.GET_PROFILE_DETAILS,
    config: { params: { email } },
  });
    return res.data;
};

export default getProfileDetails;
